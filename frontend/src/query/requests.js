import axios from "axios";

const axiosInstance = axios.create({});
axiosInstance.defaults.timeout=60000;
export default  axiosInstance;