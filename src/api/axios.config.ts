import axios from "axios";


export const httpClient = axios.create({
    baseURL: import.meta.env.DEV ? "http://localhost:5048/api" : 'https://5f4e-2803-3480-3886-b700-dc53-3aa4-875e-59f.ngrok-free.app',
});


