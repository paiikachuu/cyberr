import axios from 'axios';

let Http = axios.create({
    baseURL: process.env.MIX_APP_URL
});

export default Http;