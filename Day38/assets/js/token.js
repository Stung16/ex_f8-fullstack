import { client } from "./client.js";
client.setUrl("https://api.escuelajs.co/api/v1")

export const requestRefesh = async (refeshToken) => {
    return client.post("/auth/refesh_token", {
        refeshToken,
    })
}