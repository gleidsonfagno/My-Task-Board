import axios from "axios";

export const api = axios.create({
    // baseURL: "https://my-task-board-sigma.vercel.app/api"
    baseURL: "http://localhost:3000/api/"
})
