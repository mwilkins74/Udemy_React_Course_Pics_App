import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID lLChXVVeBjBhoNHkcN705js8qvRXqPPH0-9sZd4S-Fw",
  },
});
