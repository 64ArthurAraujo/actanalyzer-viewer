import axios from "axios"

const client = axios.create({ baseURL: "http://localhost:8080/api/v0.0.1" })

export async function getAllUsers() {
    const { data } = await client.get("/retrieve/users/")

    return data
}

