import axios from "axios";
import store from "../src/store/index";
import { GET_USER_TOKEN_GETTER } from '../src/store/storeConstants';
const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
    headers: {
        Accept: "application/json"
    }
});

axiosInstance.interceptors.request.use((config) => {
    const token = store.getters[`auth/${GET_USER_TOKEN_GETTER}`];
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
export default axiosInstance;