//import cards object
import { cards } from './cards_array.js';

const button = document.querySelector(".button");
const cardChoice = document.querySelector(".card-choice");
const cardMeaning = document.getElementById("card-meaning");

//select a random card index
button.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * cards.length);
  let randomCard = cards[randomIndex];
  const cardName = randomCard.Name;
  console.log(cardName);
  //set random card to the DOM
  cardChoice.innerHTML = `<h3>${randomCard.Name}</h3><img src="${randomCard.img}" alt="${randomCard.Name}" style="display: block;">`;
  //scroll the show the card
  const cardImg = cardChoice.querySelector("img");
  cardImg.addEventListener("load", function () {
    cardChoice.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  });

  getResponse(cardName);
});

//Dropdown menu listing the cards

const dropDown = document.querySelector(".mycard");

dropDown.addEventListener("change", function () {
  const selectValue = this.value;
  const selectIndex = cards.findIndex((card) => card.value === selectValue);
  const selectedCard = cards[selectIndex];
  //set the selected card to the DOM
  cardChoice.innerHTML = `<h3>${selectedCard.Name}</h3><img src="${selectedCard.img}" alt="${selectedCard.Name}" style="display: block;">`;
  getResponse(selectedCard);
});

//grab the definition of the card (either randomly selected or chosen from the dropdown) from function_api.mjs
async function getResponse(card) {
  let url 
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    url = `http://localhost:8888/.netlify/functions/api_function?card=${card}`;
  } else {
    url = `https://famous-pithivier-c2c9b0.netlify.app/.netlify/functions/api_function?card=${card}`;
  }  console.log("Fetching URL: ", url); 


  //run displayLoading spinner defined below
  displayLoading();
  try {
    const response = await fetch(url);
    console.log(`this is the response ${response}`)
    const resultMessage = await response.json();
    console.log(`The response was parsed here it is ${resultMessage}`)
    const resultText = resultMessage.result;
    console.log(`This should also be on the DOM --${resultText}`)
   
    displayMeaning(resultText);
  } catch (error) {
    console.error(error);
  }
}

//display the meaning of the selected card in the DOM
function displayMeaning(meaning) {
  const windowHeight = window.innerHeight;
  const dailyReading = `<h4> ${meaning}</h4>`;
  cardMeaning.innerHTML = dailyReading;
}

function displayLoading() {
  cardMeaning.innerHTML = '<div class="spinner"></div>';
}
