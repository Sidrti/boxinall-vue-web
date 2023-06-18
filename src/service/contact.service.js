import { httpClient } from "./httpClient";

export async function createContact(data) {
    console.log("httpCLient",httpClient.config);
    const response = await httpClient.post('/create-contact',data);
    return response;
}