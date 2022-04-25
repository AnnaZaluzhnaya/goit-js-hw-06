const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsArr = document.querySelector(`#ingredients`);

const ingredientsEl = ingredients.map(ingredient => {
  const ingredientsList = document.createElement('li');
  ingredientsList.textContent = ingredient;
  ingredientsList.classList.add('item');
  
  console.log(ingredientsList);
  ingredientsArr.append(ingredientsList);
});

