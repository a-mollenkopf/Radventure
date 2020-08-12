import axios from "axios";

export default {
  //Should return all saved trips
  getAllTrips: () => {
    return axios.get("/api/trips");
  }, 
   // Will be used to get  one trip with the given id
  getOneTrip: (id) => {
    return axios.get(`/api/trips/${id}`);
  },
  //  Will be used to save a new trip to the db.
  saveTrip: (savedTrip) => {
    return axios.post("/api/trips", savedTrip);
  },

  // Will be used to update  one trip with the given id
  updateOneTrip: (id) => {
    return axios.put(`/api/trips/${id}`);
  },
  //Will be used to delete a book from the db by id.
  deleteTrip: (id) => {
    return axios.delete(`/api/trips/${id}`);
  },
};
