import axios from "axios";

const baseUrl = 'http://sandbox.myg3.com.br/api';

const api = axios.create({
    baseURL: baseUrl
});

export default api;
