//document.addEventListener("DOMContentLoaded", function () {
// Add your JavaScript here.
// const button = document.getElementById("color_change");
// button.addEventListener("click", function () {

//   let items = document.getElementsByClassName('list-entries');
//   for (let i = 0; i < items.length; i++) {
//     items[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
//   }

// });
// const button1 = document.getElementById("menu_list");
// button1.addEventListener("click", function () {
//   let menu = document.getElementById('menu');
//   if (menu.classList.contains("menu_display")) {
//     menu.classList.remove('menu_display');
//   } else {
//     menu.classList.add("menu_display");
//   }
// });

function onClickRandom() {

  let items = document.getElementsByClassName('list-entries');
  for (let i = 0; i < items.length; i++) {
    items[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  }

};

function onClickMenu() {
  let menu = document.getElementById('menu');
  if (menu.classList.contains("menu_display")) {
    menu.classList.add("menu_display");
  } else {
    menu.classList.remove('menu_display');
  }
};

const entireScreen = document.addEventListener("click", function () {
  let menu = document.getElementById('menu');
  if (menu.classList.contains("menu_display")) {
    menu.classList.remove('menu_display');
  } else {
    menu.classList.add("menu_display");
  }
})




