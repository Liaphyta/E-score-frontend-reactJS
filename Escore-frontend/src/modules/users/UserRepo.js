import axios from 'axios';
import {SERVER_URL} from '../../config/config';

export function getAllUsers(page, size, filter){
    return axios.get(`${SERVER_URL}/users/all?page=${page}&size=${size}&filter=${filter}`);
}

export function deleteUser(id) {
    return axios.delete(`${SERVER_URL}/users/delete/${id}`);
}
export function loadUsername(username) {
    return axios.get(`${SERVER_URL}/users?username=${username}`);
}
export function createUser(user)
{
    return axios.post(`${SERVER_URL}/users/create`,user);
}
