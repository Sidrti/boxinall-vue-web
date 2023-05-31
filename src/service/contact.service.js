import { httpClient } from "./httpClient";

export async function createContact(data) {
    const response = await httpClient.post(`/create-contact`,data);
    return response;
}