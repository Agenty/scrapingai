import Api from "./api";

class Browser {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async screenshot(url: string, options: any = undefined): Promise<any> {
    return this.api.browser("/screenshot", { url: url, ...options });
  }

  async pdf(url: string, options: any = undefined): Promise<any> {
    return this.api.browser("/pdf", { url: url, ...options });
  }

  async content(url: string, options: any = undefined): Promise<any> {
    return this.api.browser("/content", { url: url, ...options });
  }

  async extract(url: string, options: any = undefined): Promise<any> {
    return this.api.browser("/extract", { url: url, ...options });
  }

  async scrape(url: string, options: any = undefined): Promise<any> {
    return this.api.browser("/scrape", { url: url, ...options });
  }
}

export default Browser;
