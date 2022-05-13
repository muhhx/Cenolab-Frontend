import { Api, authHeader } from "../config/axios";
import { IEmail } from "../types/email";
import { INew } from "../types/new";
import { IUpdated } from "../types/update";

export async function getHomeProjects() {
    try {
        const request = await Api.get("home")

        return request.data
    } catch (error) {
        return null
    }
}

export async function getAllProjects() {
    try {
        const request = await Api.get("projects")

        return request.data
    } catch (error) {
        return null        
    }
}

export async function getPortfolioProjects() {
    try {
        const request = await Api.get("categories")

        return request.data
    } catch (error) {
        return null        
    }
}

export async function getPortfolioProject(id: string) {
    try {
        const request = await Api.get(`projects/${id}`)

        return request.data
    } catch (error) {
        return null
    }
}

export async function updatePortfolioProject(id: string, updated: IUpdated) {
    try {
        await Api.put(`projects/${id}`, updated, authHeader)
    } catch (error) {
        return null
    }
}

export async function deletePortfolioProject(id: string) {
    try {
        await Api.delete(`projects/${id}`, authHeader)
    } catch (error) {
        return error
    }
}

export async function createPortfolioProject(projectData: INew) {
    try {
        await Api.post("projects", projectData, authHeader)
    } catch (error) {
        return error
    }
}

export async function sendEmailRequest(requestBody: IEmail) {
    try {
        const response = await Api.post("email", requestBody)

        return response.data
    } catch (error) {
        return null
    }
}