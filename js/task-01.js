const listWithId = document.querySelector('#categories');
// console.log(listWithId);
const listWithClass = document.querySelectorAll('.item');
// console.log(listWithClass);

console.log("Number of categories:", listWithClass.length);

 
listWithClass.forEach(function (value) {
const titleCategory = value.firstElementChild.textContent;
const listCategory = value.lastElementChild.children;
    console.log("Category:", titleCategory);
    console.log ("Elements:", listCategory.length);
    });
      
    