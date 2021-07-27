import axios from 'axios';

const api = axios.create({
  baseURL: 
  process.env.NODE_ENV === "production"
  ? "https://lg-kings.herokuapp.com/"
  :"http://localhost:3000/api", 
})

export default api;