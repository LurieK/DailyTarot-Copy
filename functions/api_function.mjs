// Import the fetch library for making HTTP requests
import fetch from 'node-fetch';
// Import the config function from the dotenv library to load environment variables
import { config } from 'dotenv';

// Load environment variables from a .env file into process.env
config();

// Define a serverless function handler
export const handler = async function(event, context) {
  const { card } = event.queryStringParameters;
  // get the API key from the environment variables
  const API_KEY = process.env.API_KEY;
  // Define the API endpoint URL from rapidapi.com
  const url = "https://chatgpt-ai-chat-bot.p.rapidapi.com/ask";

  // Define fetch request
  const options = {
    method: "POST",  
    headers: {
      "content-type": "application/json",  
      "X-RapidAPI-Key": API_KEY,  
      "X-RapidAPI-Host": "chatgpt-ai-chat-bot.p.rapidapi.com",  
    },
    // the query sent to ChatGPT
    body: JSON.stringify({
      query: `You are an expert Tarot reader. I will give you a card and you will tell me what it means as a prediction for the day. Please avoid negative readings and aim to inspire me with the meaning of the card. The card is the ${card}.`,
    }),
  };

  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
