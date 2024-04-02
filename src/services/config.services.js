import axios from "axios";

//
const BASE_URL = "";

export const axiosWithoutAuth = axios.create({
    baseURL: BASE_URL,
    timeout: 180_000,
});

axiosWithoutAuth.interceptors.request.use(
    (config) => {
        return config;
    },
    (e) => {
        return Promise.reject(e);
    }
);

export const axiosWithAuth = axios.create({ baseURL: BASE_URL, timeout: 180_000 })

axiosWithAuth.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = 'Bearer '
        return config;
    }
)

// vietqr
const clientId = `1b57b8a1-5646-4a0b-8564-e5c28e29cd62`;
const apiId = `51f83735-3327-47cf-be94-91916df4da5b`;
export const templateId = `K0PBkuK`;
const BASE_URL_VIETQR = "https://api.vietqr.io/v2/"

export const axiosWithVietQr = axios.create({ baseURL: BASE_URL_VIETQR, timeout: 180_000 })

axiosWithVietQr.interceptors.request.use(
    (config) => {
        config.headers['x-client-id'] = clientId;
        config.headers['x-api-key'] = apiId;
        config.headers['Content-Type'] = `application/json`;
        return config;
    }
)