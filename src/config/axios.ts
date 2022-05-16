import axios from "axios";

export const Api = axios.create({
    // @ts-ignore
    baseURL: import.meta.env.VITE_APP_API_URL
})

export const authHeader = {
    headers: {
        authorization: "Bearer " + localStorage.getItem("token")
    }
}