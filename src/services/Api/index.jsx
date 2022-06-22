import axios from "axios";

// const baseUrl = 'http://api2.myg3.com.br/api';
const baseUrl = 'https://myg3.com.br/api';

const api = axios.create({
    baseURL: baseUrl
});

export default api;
