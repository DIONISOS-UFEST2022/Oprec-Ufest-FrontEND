import axios from 'axios';
// import { URL as link } from './URL';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "https://databaseufest.aureliusivan.my.id/api";

localStorage.getItem('LoginID') ? axiosClient.defaults.headers = {
    Authorization: `Bearer ${localStorage.getItem('LoginID')}`,
    'Content-Type': 'multipart/form-data',
}
    :

    axiosClient.defaults.headers = {
        Authorization: `Bearer ${localStorage.getItem('LoginID')}`,
    };


axiosClient.defaults.timeout = 10000;

axiosClient.defaults.withCredentials = false;


export function getRequest(URL) {
    return axiosClient.get(`/${URL}`).then(response => response);
}

export function postRequest(URL, payload) {
    return axiosClient.post(`/${URL}`, payload).then(response => response);
}

export function patchRequest(URL, payload) {
    return axiosClient.patch(`/${URL}`, payload).then(response => response);
}

export function deleteRequest(URL) {
    return axiosClient.delete(`/${URL}`).then(response => response);
}