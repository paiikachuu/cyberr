import axios from 'axios';

let Api = axios.create({
    baseURL: process.env.MIX_APP_URL+"/api"
});

export default Api;