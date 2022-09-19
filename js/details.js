import { displayMessage } from "./displayMessage.js";

const detailsContainer = document.querySelector(".meal-details");
const title = document.querySelector("title");

const querySring = document.location.search;
const prams = new URLSearchParams(querySring);
const id = prams.get("id");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7b6fb4fd56mshfef59dd78e5d608p1412eajsn71a7e658170f",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

const url = `https://tasty.p.rapidapi.com/recipes/detail?id=${id}`;

async function getMeal() {
  try {
    const response = await fetch(url, options);
    const meal = await response.json();
    console.log(meal);

    // Display HTML
    displayMeal(meal);

    // Seting the title
    title.innerHTML = `${meal.name} details`;
  } catch (error) {
    console.log(error);
    detailsContainer.innerHTML = displayMessage("An error has occurred!", "error-message");
  }
}
getMeal();

function displayMeal(meal) {
  let instructions = "";

  meal.instructions.forEach((element) => {
    if (!element) {
      instructions = "";
    } else {
      instructions += `<li>${element.display_text}</li>`;
    }
  });

  detailsContainer.innerHTML = `<img class="meal-image" src="${meal.thumbnail_url}" alt="${meal.name}"></img>
                                <div class="meal-detail">
                                  <h3 class="meal-name">${meal.name}</h3>
                                  <p class="meal-description">${meal.description}</p>
                                  <ol class="meal-instructions">${instructions}</ol>
                                </div>`;
}
