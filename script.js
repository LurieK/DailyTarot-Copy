import { cards } from './cards_array.js';
  
const button = document.querySelector(".button");
const cardChoice = document.querySelector(".card-choice");
const cardMeaning = document.getElementById("card-meaning");

button.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * cards.length);
  let randomCard = cards[randomIndex];
  const cardName = randomCard.Name;
  console.log(cardName);
  cardChoice.innerHTML = `<h3>${randomCard.Name}</h3><img src="${randomCard.img}" alt="${randomCard.Name}" style="display: block;">`;

  const cardImg = cardChoice.querySelector("img");
  cardImg.addEventListener("load", function () {
    cardChoice.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  });

  getResponse(cardName);
});

//dropdown

const dropDown = document.querySelector(".mycard");

dropDown.addEventListener("change", function () {
  const selectValue = this.value;
  const selectIndex = cards.findIndex((card) => card.value === selectValue);
  const selectedCard = cards[selectIndex];
  cardChoice.innerHTML = `<h3>${selectedCard.Name}</h3><img src="${selectedCard.img}" alt="${selectedCard.Name}" style="display: block;">`;
  getResponse(selectValue);
});

async function getResponse(card) {
  const url = "https://chatgpt-ai-chat-bot.p.rapidapi.com/ask";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "526d114da5mshd11026488d6ba9dp15cf91jsn42c0b1394840",
      "X-RapidAPI-Host": "chatgpt-ai-chat-bot.p.rapidapi.com",
    },
    body: JSON.stringify({
      query: `You are a expert Tarot reader.  I will give you a card and you will tell me what it means as a prediction
        for the day. Please avoid negative readings and aim to inspire me with the meaning of the card. The card is the ${card}.`,
    }),
  };
  displayLoading();
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const resultObj = JSON.parse(result);
    const resultText = resultObj.response;
    displayMeaning(resultText);
  } catch (error) {
    console.error(error);
  }
}

function displayMeaning(meaning) {
  const windowHeight = window.innerHeight;
  const dailyReading = `<h4> ${meaning}</h4>`;
  cardMeaning.innerHTML = dailyReading;
}

function displayLoading() {
  cardMeaning.innerHTML = '<div class="spinner"></div>';
}
