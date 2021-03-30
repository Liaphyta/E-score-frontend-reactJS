import axios from 'axios';
import {SERVER_URL} from '../../config/config';

export function getPreviousMatches(){
    return axios.get(`${SERVER_URL}/dota2/previousMatches`);
}
export function getUpcomingMatches()
{
    return axios.get(`${SERVER_URL}/dota2/upcomingMatches`);
}
export function getTournaments()
{
    return axios.get(`${SERVER_URL}/dota2/tournaments`);
}