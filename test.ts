import Agenty from "./lib/Agenty";

const agenty: Agenty = new Agenty(`${process.env.API_KEY}`);

const url: string = "https://example.com";
agenty
  .captureScreenshot(url)
  .then((imageData: Buffer) => {
    // Handle the image data, for example, save it to a file or display it.
    console.log("Screenshot captured successfully.");
  })
  .catch((error: Error) => {
    // Handle errors
    console.error("Error capturing screenshot:", error);
  });
