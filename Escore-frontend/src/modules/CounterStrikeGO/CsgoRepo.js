import axios from 'axios';
import {SERVER_URL} from '../../config/config';

export function getPreviousMatches(){
    return axios.get(`${SERVER_URL}/csgo/previousMatches`);
}
export function getUpcomingMatches()
{
    return axios.get(`${SERVER_URL}/csgo/upcomingMatches`);
}
export function getTournaments()
{
    return axios.get(`${SERVER_URL}/csgo/tournaments`);
}