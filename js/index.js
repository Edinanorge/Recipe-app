import { displayMessage } from "./displayMessage.js";

const mealContainer = document.querySelector(".meals");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7b6fb4fd56mshfef59dd78e5d608p1412eajsn71a7e658170f",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes`;

async function getMeals() {
  try {
    const response = await fetch(url, options);
    const results = await response.json();
    const meals = results.results;

    console.log(meals);

    displayMeals(meals);
  } catch (error) {
    console.log(error);
    mealContainer.innerHTML = displayMessage(`An error has occurred!  ${error}`, "error-message");
  }
}
getMeals();

function displayMeals(meals) {
  mealContainer.innerHTML = "";

  for (let i = 0; i < meals.length; i++) {
    if (i === 20) {
      break;
    }

    let calories;

    if (meals[i].nutrition.calories) {
      calories = meals[i].nutrition.calories;
    } else {
      calories = "Not known";
    }

    mealContainer.innerHTML += `<div class="meal">
                                  <a href="details.html?id=${meals[i].id}">
                                    <img class="meal-img" src="${meals[i].thumbnail_url}" alt="${meals[i].name}"></img>
                                    <h3 class="meal-name">${meals[i].name}</h3>
                                    <p><strong>Calories:</strong> ${calories}</p>
                                    <p><strong>Prep Time:</strong> ${meals[i].total_time_minutes} min</p>
                                  </a>
                                </div>`;
  }
}
