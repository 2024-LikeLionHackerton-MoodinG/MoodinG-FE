import client from "./client"

export const session = () => {
    return client.post('/session');
};

export const feedback = () => {
    return client.post("/feedback");
}