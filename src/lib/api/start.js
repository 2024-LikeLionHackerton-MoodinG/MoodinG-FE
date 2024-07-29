import client from "./client"

export const session = () => {
    return client.post('/session');
};