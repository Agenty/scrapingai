import axios from "axios";

class Api {
    private baseUrl: string = "https://api.agenty.in/v2";
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async get(url: string, params?: any): Promise<any> {
        const response = await axios.get(`${this.baseUrl}${url}`, {
            params: {
                apiKey: this.apiKey,
                ...params,
            },
        });
        return response.data;
    }

    async post(url: string, data: any, params?: any): Promise<any> {
        const response = await axios.post(`${this.baseUrl}${url}`, data, {
            params: {
                apiKey: this.apiKey,
                ...params,
            },
        });
        return response.data;
    }

    async put(url: string, data: any, params?: any): Promise<any> {
        const response = await axios.put(`${this.baseUrl}${url}`, data, {
            params: {
                apiKey: this.apiKey,
                ...params,
            },
        });
        return response.data;
    }

    async delete(url: string, params?: any): Promise<string> {
        const response = await axios.delete(`${this.baseUrl}${url}`, {
            params: {
                apiKey: this.apiKey,
                ...params,
            },
        });
        return response.data;
    }
}

export default Api;