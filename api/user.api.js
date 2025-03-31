import dotenv from 'dotenv';
import config from '../playwright.config';
dotenv.config();

console.log(process.env.TOKEN)

const token = process.env.TOKEN;
const apiBaseURL = config.use.apiBaseURL;

export class UserAPI {
    static async createUser(request, userData) {
        const response = await request.post(`${apiBaseURL}/users`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: userData
        });
        return response;
    }

    static async getUser(request, userId) {
        const response = await request.get(`${apiBaseURL}/users/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response;
    }

    static async deleteUser(request, userId) {
        const response = await request.delete(`${apiBaseURL}/users/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response;
    }
}