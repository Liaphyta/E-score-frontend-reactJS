import axios from 'axios';
import {SERVER_URL} from '../../config/config';

export function getPreviousMatches(){
    return axios.get(`${SERVER_URL}/lol/previousMatches`);
}
export function getUpcomingMatches()
{
    return axios.get(`${SERVER_URL}/lol/upcomingMatches`);
}
export function getTournaments()
{
    return axios.get(`${SERVER_URL}/lol/tournaments`);
}