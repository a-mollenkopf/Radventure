

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
//Passport
const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const flash = require("connect-flash");
const db = require("./models");
////Passport

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const routes = require("./routes");
app.use(express.static("client/build"));
//Passport
app.use(
  session({
    cookie: { maxAge: 40000 },
    secret: "something",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    function (req, usernameInput, passwordInput, done) {
      db.User.findOne({ username: usernameInput }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }
        if (!user.validatePassword(passwordInput)) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user);
      });
    }
  )
);

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/search",
    failureRedirect: "/login",
    failureFlash: "Invalid username or password.",
  })
);

app.post("/signup", (req, res) => {
  // const newUser = new db();
  db.User.create(req.body)
    .then((dbUsers) => {
        req.login(dbUsers, function(err) {
          if (err) {
            console.log(err);
          }
          return res.redirect('/search');
        });
          })
    .catch((err) => console.log(err));
});

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  db.User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/radventure", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database.");
  })
  .catch((err) => {
    console.log("Unable to connect to database.");
    console.log(err);
  });
// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});