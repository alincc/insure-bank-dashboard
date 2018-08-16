import { API_CONFIG } from "../config/api.config";

let BASE_URL = 'http://localhost:5000';


export interface IApi {
    success: boolean;
    message: string;
    data: any;
}


export const API = {
    companies: `${BASE_URL}/${API_CONFIG.version}/companies`
}