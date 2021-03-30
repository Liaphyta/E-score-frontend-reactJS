import axios from 'axios';
import { SERVER_URL } from '../config/config';


export function getChampionsRest(){
    return axios.get(`${SERVER_URL}/lol/champions`);
}
export function championWithId(id){
    return axios.get(`${SERVER_URL}/lol/champions/${id}`);
}