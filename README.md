Certainly! Here's the updated README file based on the template you provided:

---

# Daily Tarot

This is a web application that allows users to select a tarot card from a dropdown menu or to have one randomly selected. It then provides a prediction for the day based on the meaning of the selected card. The predictions are generated using the **ChatGPT Ai Chat bot API**, with the requests to the API handled server-side in a **Netlify Function**. The server-side application is **asynchronous, using JavaScript's async/await syntax** for handling promises. The API key for the ChatGPT service is securely stored in a `.env` file and accessed via the `dotenv` package. 

<div align="center">
  <img src="tarot_laptop.png" alt="Example Image" width="300" style="display:inline; margin-right:10px;"/>
  <img src="tarot_mobile.png" alt="Example Image" width="300" style="display:inline;"/>
</div>

## How to Use
### Select My Card
Click "Select My Card" to have a random card selected for you.

### Dropdown Menu
The dropdown menu allows users to select a card from a list of options. Each card is represented by the Raider Waite image of the card and its name.

### Card Prediction
Once a card is selected, the application uses the selected card's name to make an API call to a tarot card meaning service. The API returns a prediction for the day based on the meaning of the selected card.

## Installation 

Clone the repository to your local machine: [https://github.com/LurieK/DailyTarot-Copy.git](https://github.com/LurieK/DailyTarot-Copy.git)

Navigate to the project folder and locate the `index.html` file.

Copy the file path of the `index.html` file and paste it into the address bar of your preferred web browser, or double-click the file to open it in your default browser.

Example of a file path: `file:///C:/Users/YourUsername/path/to/dailytarot/index.html`

Or to view, [click here](https://working-state--famous-pithivier-c2c9b0.netlify.app/)

## Credits
This application was created by Luraine Kimmerle using the following resources:

- Tarot card images from Rider Waite Tarot
- Tarot card meaning API from ChatGPT Ai Chat bot

## Contributing

This app is a simple demo project and is not currently accepting contributions. However, if you find a bug or have a feature request, feel free to open an issue on the [GitHub repository](https://github.com/LurieK/DailyTarot-Copy.git).

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

Feel free to update this README file in your GitHub repository. Let me know if you have any more questions or need further clarifications!
