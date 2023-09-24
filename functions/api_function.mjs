import fetch from 'node-fetch';
import { config } from 'dotenv';

config();

export const handler = async function(event, context) {
  const { card } = event.queryStringParameters;
  const API_KEY = process.env.API_KEY;
  const url = "https://chatgpt-ai-chat-bot.p.rapidapi.com/ask";

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "chatgpt-ai-chat-bot.p.rapidapi.com",
    },
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
        "Access-Control-Allow-Origin": "*", // Update this to match your front-end URL in production
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
