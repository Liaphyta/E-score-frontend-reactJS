import axios from 'axios';
import {SERVER_URL} from '../../config/config';

export function getTeams(){
    return axios.get(`${SERVER_URL}/teams`);
}