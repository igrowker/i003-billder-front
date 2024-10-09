import axios from "axios";


export const httpClient = axios.create({
    baseURL: "http://localhost:5048/api",
});


