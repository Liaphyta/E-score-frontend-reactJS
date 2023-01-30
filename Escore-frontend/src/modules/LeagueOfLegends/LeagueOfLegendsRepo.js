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
export function getFixtures(leagueName)
{
    return axios.get(`${SERVER_URL}/lol/network/${leagueName}`)
}
export function getEdges(leagueName)
{
    return axios.get(`${SERVER_URL}/lol/network/${leagueName}/edges`)

}
export function getNodes(leagueName)
{
    return axios.get(`${SERVER_URL}/lol/network/${leagueName}/nodes`)
}
export function getGraph(leagueName)
{
    return axios.get(`${SERVER_URL}/lol/network/${leagueName}/graph`)
}
export function getTeams(leagueName)
{
    return axios.get(`${SERVER_URL}/lol/network/${leagueName}/teamz`)
}
export function getGraphByTeamAndLeague(leagueName,team)
{
    return axios.get(`${SERVER_URL}/lol/network/${leagueName}/${team}`)
}