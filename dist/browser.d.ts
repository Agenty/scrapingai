import Api from "./api";
declare class Browser {
    private api;
    constructor(api: Api);
    screenshot(url: string, options?: any): Promise<any>;
    pdf(url: string, options?: any): Promise<any>;
    content(url: string, options?: any): Promise<any>;
    extract(url: string, options?: any): Promise<any>;
    scrape(url: string, options?: any): Promise<any>;
}
export default Browser;
