import { API_CONFIG } from "../config/api.config";

let BASE_URL = 'http://localhost:5000';


export interface IApi {
    success: boolean;
    message: string;
    data: any;
}


export const API = {
    companies: `${BASE_URL}/${API_CONFIG.version}/companies`,
    policies: `${BASE_URL}/${API_CONFIG.version}/policies`,
    users: `${BASE_URL}/${API_CONFIG.version}/users`,
    subscriptions:  `${BASE_URL}/${API_CONFIG.version}/subscriptions`
}