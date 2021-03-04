import * as axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY" : "bd45da59-c5f8-4be5-b2d0-32e0481c20e5"},
    withCredentials: true
})