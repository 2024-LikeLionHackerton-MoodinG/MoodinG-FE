import axios from "axios";

const client = axios.create({
    baseURL: "https://6194d3e2-5f7a-441c-bfeb-64d700b326e0.mock.pstmn.io",
    withCredentials: true,
});

export default client;