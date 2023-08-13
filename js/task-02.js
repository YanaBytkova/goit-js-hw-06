const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const allIngredients = document.querySelector('#ingredients');
console.log (allIngredients);
ingredients.map(function (value) {
  const listIngredients = document.createElement("li");
  listIngredients.textContent = value;
  listIngredients.classList.add("item");
  console.log (listIngredients);
  const newIngredients = allIngredients.append(listIngredients);
});


