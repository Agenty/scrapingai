declare class Api {
    private baseUrl;
    private apiKey;
    constructor(apiKey: string);
    get(url: string, params?: any): Promise<any>;
    post(url: string, data: any, params?: any): Promise<any>;
    put(url: string, data: any, params?: any): Promise<any>;
    patch(url: string, data: any, params?: any): Promise<any>;
    delete(url: string, params?: any): Promise<string>;
}
export default Api;
