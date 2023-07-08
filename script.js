const getRecipeBtn = document.getElementById('getRecipe');
const apiKey = "cfbc6ad26b1c4d17b1ea7ccefdf4a95a"
const url = "https://api.spoonacular.com/recipes/random?apiKey=" + apiKey;
const recipeContainer = document.getElementById('recipe');

getRecipeBtn.addEventListener('click', () => {
  fetch(url)
  .then(res => res.json())
  .then(res => {
    getRecipe(res.recipes[0]);
  });
});

const getRecipe = (recipe) => {
  const ingredients = [];
  // const recipeImage;
  // const ingredientAmount;
  // const summary;
  // const instructions;
  
  for(let i=0; i<recipe.extendedIngredients.length; ++i)
      ingredients.push(recipe.extendedIngredients[i].original);
  printRecipe (recipe, recipe.extendedIngredients.length);
  
  const newInnerHTML = `
    <div class="row text-center">
      <div class="col-12">
        <h1 class="mb-3">${recipe.title}</h1>
				<img class="mx-0 mb-1" src="${recipe.image}" alt="Meal Image">
      </div>
    </div>
        <hr>
    <div class="row">
        <div class="col-2"><strong>Total Time</strong></div>
        <div class="col-2"><strong>Servings</strong></div>
        <div class="col-2"><strong>Health Score</strong></div>
    </div>
    <div class="row">
        <div class="col-2">${recipe.readyInMinutes} Mins</div>
        <div class="col-2">${recipe.servings}</div>
        <div class="col-2">${recipe.healthScore}</div>
    </div>
        <hr>
    <div class="row">
      <div class="col-8"
        <p>${recipe.summary}</p>
        <h3>Ingredients</h3>
        <ul>
          ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>

        <br>
        
        <h3>How to Make It (Full Instructions)</h3>
        <p>${recipe.instructions}</p>
        <h3>How to Make It (Steps)</h3>
        <ol>
          ${recipe.analyzedInstructions[0].steps.map(instruction => `<li>${instruction.step}</li>`).join('')}
        </ol>
      </div>
    </div>
    <br>
    <br>
    `;
  recipeContainer.innerHTML = newInnerHTML;
}

const popuplateArray = (arr1, arr2, len) => {
  arr1.foreach(element => arr2.push(element));
}



const printRecipe = (recipe, len) => {
  for (let i=0; i< len; ++i){
    console.log(recipe.extendedIngredients[i].name);
  }
}