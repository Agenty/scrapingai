import axios, { AxiosRequestConfig } from "axios";

class Agenty {
  private apiKey: string;
  private apiUrl: string;
  private browserApiUrl: string;
  private _headers: AxiosRequestConfig;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.apiUrl = "https://api.agenty.com/v2";
    this.browserApiUrl = "https://browser.agenty.com/api/screenshot";
  }

  async captureScreenshot(url: string) {
    return await axios.post(
      this.browserApiUrl,
      {
        url: url,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Agenty-ApiKey": this.apiKey,
        },
        responseType: "arraybuffer",
      }
    );
  }
}

export default Agenty;
