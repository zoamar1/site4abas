import axios from "axios"

export const apiURL = axios.create({
    baseURL: "https://rickandmortyapi.com/api"
})