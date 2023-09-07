import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());

const API_KEY = process.env.API_KEY;


app.get('/tarot', async (req, res)=>{
    const {card} = req.query; 
    const url = "https://chatgpt-ai-chat-bot.p.rapidapi.com/ask";
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": "chatgpt-ai-chat-bot.p.rapidapi.com",
        },
        body: JSON.stringify({
            query: `You are a expert Tarot reader. I will give you a card and you will tell me what it means as a prediction
            for the day. Please avoid negative readings and aim to inspire me with the meaning of the card. The card is the ${card}.`,
        }),

    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        res.json(result);
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}
);

const port = 5500; 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});