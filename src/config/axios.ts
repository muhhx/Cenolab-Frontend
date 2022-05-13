import axios from "axios";

export const Api = axios.create({
    baseURL: "http://localhost:5000/api/v1/"
})

export const authHeader = {
    headers: {
        authorization: "Bearer " + localStorage.getItem("token")
    }
}