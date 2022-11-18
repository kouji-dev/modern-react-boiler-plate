import {default as a, AxiosRequestConfig, AxiosError} from 'axios'

const TIMEOUT = 60 * 1000;

export const axios = a.create({
    timeout: TIMEOUT,
    baseURL: import.meta.env.VITE_APP_API_URL,
})

const onRequestSuccess = (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('jhi-authenticationToken') || sessionStorage.getItem('jhi-authenticationToken');
    if (token) {
        config!.headers!.Authorization = `Bearer ${token}`;
    }
    return config;
};
const onResponseSuccess = (response: AxiosRequestConfig) => response;
const onResponseError = (err: AxiosError) => {
    const status = err.status || err.response?.status;
    if (status === 403 || status === 401) {
        // onUnauthenticated();
    }
    if (status === 403) {
        // onSetUnauthorized();
    }
    return Promise.reject(err);
};

axios.interceptors.request.use(onRequestSuccess);
axios.interceptors.request.use(onResponseSuccess, onResponseError);