import axios from "axios"
import { json } from "react-router-dom";

export const apiurl = process.env.PORT ? `http://localhost:${process.env.PORT}/api/` : `http://localhost:3001/api/`;

export function getSchools() {
    return axios.get(`${apiurl}school`);
}

export function getModules() {
    return axios.get(`${apiurl}module`);
}

export function getModuleFromName(name) {
    return axios.get(`${apiurl}module?name=${name}`);
}

export function getModuleFromSchool(school) {
    return axios.get(`${apiurl}module?school=${school}`);
}

export function getModuleFromCode(code) {
    return axios.get(`${apiurl}module?code=${code}`);
}

export function getSurveyQuestions(id) {
    return axios.get(`${apiurl}survey?id=${id}`);
}

export function getSurveyIds() {
    return axios.get(`${apiurl}survey`);
}

export function postResults(moduleCode, surveyID, answers){
    return axios.post(`${apiurl}results`, {moduleCode, surveyID, answers});
}

export function getResults(moduleCode) {
    return axios.get(`${apiurl}results?moduleCode=${moduleCode}`);
}

export function getRanks(id) {
    return axios.get(`${apiurl}ranks?id=${id}`);
}

export function getComments(moduleCode) {
    return axios.get(`${apiurl}comments?moduleCode=${moduleCode}`);
}