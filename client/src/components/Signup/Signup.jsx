import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
const Signup = () => {
return (
    <div class="container">
      <form action="/Signup" method="post">
        <div>
          <label>Email:</label>
          <input type="text" name="username"/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password"/>
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="confirmPassword" name="confirmPassword"/>
        </div>
        <div>
          <input type="submit" value="signup"/>
        </div>
      </form>
    </div>
);
};

export default Signup;



