import axios from 'axios';
import {SERVER_URL} from '../../config/config';

export function getGroups(page, size){
    return axios.get(`${SERVER_URL}/groups/all?page=${page}&size=${size}`);
}

export function createUser(user){
    return axios.post(`${SERVER_URL}/users/create`, user);  
}

export function checkIfUserExists(username){
    return axios.get(`${SERVER_URL}/users/user/${username}`);
}