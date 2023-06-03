import axios from "axios";
const URL = import.meta.env.VITE_API_BASE_URL;
const axiosClient = axios.create({
    baseURL: URL,
});

export default axiosClient;