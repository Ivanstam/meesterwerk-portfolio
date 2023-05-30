import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://www.rijksmuseum.nl/api/nl/',
});

export default axiosClient;