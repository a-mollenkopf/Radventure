import axios from "axios";
const key = process.env.REACT_APP_API_KEY;

export default {
  //Should return current trip from api
  getDirection: (queryOne, queryTwo) => {
    return axios.get(`https://www.mapquestapi.com/directions/v2/route?key=${key}&from=${queryOne}&to=${queryTwo}`);
  }, 
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
  updateOneTrip: (id, data) => {
    return axios.put(`/api/trips/${id}`,{data});
  },
  //Will be used to delete a book from the db by id.
  deleteTrip: (id) => {
    return axios.delete(`/api/trips/${id}`);
  },
};