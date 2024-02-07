// Import the fetch library for making HTTP requests
import fetch from 'node-fetch';
// Import the config function from the dotenv library to load environment variables
import { config } from 'dotenv';

// Load environment variables from a .env file into process.env
config();


export const handler = async function(event, context) {

const { card } = event.queryStringParameters;
//defind API from env
const API_KEY = process.env.API_KEY;

// get the API key from the environment variables
const url = 'https://chatgpt-42.p.rapidapi.com/conversationgpt4';

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com'
	},
	body: JSON.stringify ({
		messages: [
			{
				role: 'User_name',
				content: `You are an expert Tarot reader. I will give you a card and you will tell me what it means as a prediction for the day. Begin your message greeting me, and te
				encouraging me. Please avoid negative readings and aim to inspire me with the meaning of the card. The card is the ${card}.`
			}
		],
		system_prompt: '',
		temperature: 0.9,
		top_k: 5,
		top_p: 0.9,
		max_tokens: 256,
		web_access: false
	})
};

try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return {
      statusCode: 200,
	  headers: {
                "Access-Control-Allow-Origin": "https://working-state--famous-pithivier-c2c9b0.netlify.app/", 
                "Access-Control-Allow-Headers": "Content-Type", 
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS" 
            },
      body: JSON.stringify(result)
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" })
    };
  }
}
// Define a serverless function handler
// export const handler = async function(event, context) {
//   const { card } = event.queryStringParameters;
//   // get the API key from the environment variables
//   const API_KEY = process.env.API_KEY;
//   // Define the API endpoint URL from rapidapi.com
//   const url = "https://chatgpt-42.p.rapidapi.com/conversationgpt4";

//   // Define fetch request
//   const options = {
//     method: "POST",  
//     headers: {
//       "content-type": "application/json",  
//       "X-RapidAPI-Key": API_KEY,  
//       "X-RapidAPI-Host": "chatgpt-42.p.rapidapi.com",  
//     },
//     // the query sent to ChatGPT
//     body: JSON.stringify({
//       query: `You are an expert Tarot reader. I will give you a card and you will tell me what it means as a prediction for the day. Please avoid negative readings and aim to inspire me with the meaning of the card. The card is the ${card}.`,
//     }),
//   };

  
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     return {
//       statusCode: 200,
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify(result),
//     };
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: error.message }),
//     };
//   }
// };
