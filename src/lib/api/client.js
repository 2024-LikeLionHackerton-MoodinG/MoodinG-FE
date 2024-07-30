import axios from "axios";

const client = axios.create({ baseURL: "http://3.39.224.116:8080" });

export default client;