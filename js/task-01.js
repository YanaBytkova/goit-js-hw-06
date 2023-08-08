const listWithId = document.querySelector('#categories');
// console.log(listWithId);
const listWithClass = document.querySelectorAll('.item');
// console.log(listWithClass);

console.log("Number of categories:", listWithClass.length);
const arrCat = Array.from(listWithClass);
 
arrCat.forEach(function (value) {
const titleCategory = value.firstElementChild.textContent;
const listCategory = value.querySelectorAll("li");
    console.log("Category:", titleCategory);
    console.log ("Elements:", listCategory.length);
    });
      
    