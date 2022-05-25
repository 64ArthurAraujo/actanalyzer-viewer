import axios from "axios"

const client = axios.create({ baseURL: "http://localhost:8080/api/v0.0.1" })

export async function getAllUsers() {
    try {
        const { data } = await client.get("/retrieve/users/")
        return data
        
    } catch (Exception) {
        console.error(Exception);
    }
}

export async function getTotalUserSearches(id: string) {
    try {
        const { data } = await client.get(`/retrieve/users/${id}/searches/total`)
        return data
        
    } catch (Exception) {
        console.error(Exception);
    }
}

export async function getCategorisedUserSearches(id: string) {
    try {
        const { data } = await client.get(`/retrieve/users/${id}/searches/categorised`)
        return data

    } catch (Exception) {
        console.error(Exception);
    }
}

export async function getUser(id: string) {
    try {
        const { data } = await client.get(`/retrieve/users/${id}`)
        return data

    } catch (Exception) {
        console.error(Exception);
    }
}

