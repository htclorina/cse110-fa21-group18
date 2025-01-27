const key = "apiKey=2117ab7aafbb4357a88eed39d2aa06ab";
//const key = "apiKey=ca7c4c9526e04c1e866556ba28d08808";
window.addEventListener("DOMContentLoaded", init);

// This is the first function to be called, so when you are tracing your code start here.
async function init() {
  var recipes = JSON.parse(localStorage.getItem("recipes"));
  if (recipes === null) {
    recipes = [];
  }
  //   var recipeInstructions = JSON.parse(localStorage.getItem("instructions"));
  var testingIds = [209128, 31868, 9751, 206706, 209251];
//   await getRecipe(324694, key, recipes);

  // tester code that loads localstorage
    // console.log(testingIds.length);
    // for (let j = 0; j < testingIds.length; j++) {
    //   await getRecipe(testingIds[j], key, recipes);
    // }

  for (let i = 0; i < recipes.length; i++) {
    const test = {
      image_link: recipes[i].image,
      recipe_title: recipes[i].title,
      cook_time: recipes[i].readyInMinutes + " minutes",
      tags: ["Norway food", "easy"],
      index: i
    };
    fakeCardData.push(test);
    // console.log(recipes[i].analyzedInstructions[0].steps[0].step);
  }
  //   console.log(testingIds.length);
  //   for (let j = 0; j < testingIds.length; j++) {
  //     await getRecipe(testingIds[j], key);
  //   }
  //   console.log(recipes.length);

  // fetch the recipes and wait for them to load
  const main = document.querySelector("#all-recipes-cards");

  fakeCardData.forEach((sfData) => {
    const nextCard = document.createElement("recipe-card");
    nextCard.data = sfData;
    main.appendChild(nextCard);
  });
}

const fakeCardData = [

];

//SERVICE FUNCTIONS

//retrieves recipe information from id, make sure to have apikey input
async function getRecipe(id, apikey, recipeArray, instructions) {
  //JSON placeholder is a simple placeholder REST API that returns JSON
  await fetch(`https://api.spoonacular.com/recipes/${id}/information?${apikey}`)
    .then((response) => {
      //response.json() turns the response objects body into JSON
      //response.json() returns a JS promise
      //Use response.text() to turn your response object to text
      return response.json();
    })
    .then(async (data) => {
      //We have successfully made a GET request!
      //Log the data to the console:
      // console.log(data);
      recipeArray.push(data);
      // console.log(recipes[0].title);
      // console.log(JSON.parse(recipes));
      localStorage.setItem("recipes", JSON.stringify(recipeArray));
      //   await getRecipeInstructions(id, key, instructions);
    });
}

// //retrieves recipe instructions from id, make sure to have apikey input
// async function getRecipeInstructions(id, apikey, instructionsArray) {
//   //JSON placeholder is a simple placeholder REST API that returns JSON
//   await fetch(
//     `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?${apikey}`
//   )
//     .then((response) => {
//       //response.json() turns the response objects body into JSON
//       //response.json() returns a JS promise
//       //Use response.text() to turn your response object to text
//       return response.json();
//     })
//     .then((data) => {
//       //We have successfully made a GET request!
//       //Log the data to the console:
//       // console.log(JSON.stringify(data));
//       // data = JSON.stringify(data);
//       instructionsArray.push(data);
//       // console.log(JSON.parse(recipeInstructions)[0]);
//       localStorage.setItem("instructions", JSON.stringify(instructionsArray));
//     });
// }
