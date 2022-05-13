import { Api } from "../../config/axios";

export async function LoginRequest(email: string, password: string) {
    try {
        const request = await Api.post("login", { email, password })

        return request.data
    } catch (error) {
        return null
    }
}

export function setTokenLocalStorage(token: string) {
    localStorage.setItem('token', token)
}

export function getTokenLocalStorage() {
    const token = localStorage.getItem('token')

    return token
}