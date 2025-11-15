
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const summarizeText = async (text: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Summarize the following text concisely and clearly, focusing on the main points. The summary should be easy to understand for a general audience. \n\nText:\n---\n${text}`,
    });
    return response.text;
  } catch (error) {
    console.error("Error summarizing text with Gemini API:", error);
    throw new Error("Failed to communicate with the AI model.");
  }
};
