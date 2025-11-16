// ^ GPT Api

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyByxLIZUzUH6PLaYK6RqcumTD6-rpNTXzQ",
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();

// ^ Quote Api
const quote = "https://zenquotes.io/api/quotes/";

async function quoteapi(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
}
quoteapi(quote);
