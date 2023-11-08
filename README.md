# scarapingai

[![version](https://img.shields.io/npm/v/scrapingai.svg)](https://www.npmjs.com/package/scrapingai)
[![license](https://img.shields.io/npm/l/scrapingai.svg)](https://www.npmjs.com/package/scrapingai)

> Extract data from websites automatically with AI or build [web scraping agents](https://agenty.com/products/scraping-agent) for bulk URL scraping.

![Auto extract website data with AI](/assets/auto-extract-api.png)

## Installation

Install it via npm:

```
npm i scarapingai
```

## Highlights
- Built-in residential proxies and captcha handling
- Smart ad blocker, popup blocker for better performance
- Accept cookie consent automatically to close cookie banners
- Compatible with Puppeteer, Playwright for browser automation and testing.
- Background jobs for bulk URL scraping with automatic retry & error handling.

## Usage
Get your [api key from here](https://cloud.agenty.com/settings/apikeys)

```
const agenty = new Agenty(API_KEY);
const data = await agenty.browser.extract("https://example.com");
console.log(data);
```

### Extract
To auto-extract product, jobs listing, SEO meta data, schema JSON etc from given URL

```
const data = await agenty.browser.extract("https://example.com");
console.log(data);
```

### Scrape
To extract data from given CSS selector or custom jQuery function

```
const data = await agenty.browser.scrape("https://example.com");
console.log(data);
```

### Screenshot
To [capture a screenshot](https://agenty.com/tools/webpage-to-screenshot) for given URL


```
const data = await agenty.browser.screenshot("https://example.com");
console.log(data);
```

### PDF
To [convert webpage into PDF](https://agenty.com/tools/webpage-to-pdf).


```
const data = await agenty.browser.pdf("https://example.com");
console.log(data);
```

### Content
To get HTML content from a URL.

```
const data = await agenty.browser.content("https://example.com");
console.log(data);
```


## License

**scrapingai** is a project by [Agenty](https://agenty.com), released under the [MIT](https://github.com/Agenty/scrapingai/blob/main/LICENSE) License.
