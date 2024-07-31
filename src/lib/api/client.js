import axios from "axios";

const client = axios.create({
    baseURL: "https://api.mooding.site/",
    withCredentials: true,
});

export default client;