import axios from "axios";

export default {
 
  //Should return all saved books
  getAllTrips: () => {
    return axios.get("/api/trips");
  },

  //  Will be used to save a new book to the database.
  saveTrip: (savedTrip) => {
    return axios.post("/api/trips", savedTrip);
  },

  //Will be used to delete a book from the database by Mongo `_id`.
  deleteTrip: (id) => {
    return axios.delete(`/api/trips/${id}`);
  },
};
