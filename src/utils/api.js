import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:5000" // This IP is pointing to the host machine when using the Android Emulator
});

export default api;
