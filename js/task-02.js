const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const allIngredients = document.querySelector('#ingredients');
// console.log (allIngredients);

const items = ingredients.map((ingredient) => {
  const listIngredients = document.createElement("li");
  listIngredients.textContent = ingredient;
  listIngredients.classList.add("item");
 
  return listIngredients;
});

  allIngredients.append(...items);
