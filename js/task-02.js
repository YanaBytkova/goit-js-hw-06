const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const allIngredients = document.querySelector('#ingredients');
ingredients.forEach(function (value) {
  const listIngredients = document.createElement("li");
  listIngredients.textContent = value;
  listIngredients.classList.add("item");
  allIngredients.append(listIngredients);
  console.log (listIngredients);

});


