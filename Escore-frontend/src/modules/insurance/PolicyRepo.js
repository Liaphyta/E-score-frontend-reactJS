import axios from 'axios';
import {SERVER_URL} from '../../config/config';

export function uploadDocument(documents)
{
    return axios.get(`${SERVER_URL}/aws/upload/?birthCertificate=${documents.birthCertificate}&insuranceForm=${documents.insuranceForm}
    &medicalCertificate=${documents.medicalCertificate}&investigationReport=${documents.investigationReport}&dischargeSummary=${documents.dischargeSummary}`);
}
export function checkStatus()
{
    return axios.get(`${SERVER_URL}/aws/status`);
}
export function authenticate(formdata)
{
    return axios.get(`${SERVER_URL}/aws/facial/?personalPhoto=photo.jpg&idPhoto=${formdata.passportPhoto}`)
}
export function getInsurance(username)
{
    return axios.get(`${SERVER_URL}/aws/createInstance/?username=${username}`)

}

