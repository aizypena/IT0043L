// document.addEventListener("DOMContentLoaded", function () {
//     const catItems = document.querySelectorAll(".cat-item");
//     const petsDisplay = document.getElementById("pets-display");
//     const defaultImage = petsDisplay.querySelector("img");

//     catItems.forEach((catItem) => {
//         catItem.addEventListener("mouseenter", function () {
//             const imgSrc = catItem.querySelector("img").src;
//             defaultImage.src = imgSrc;
//         });
//     });
// });

// //alert function
// const mochiElements = document.getElementsByClassName("mochi");
// for (let i = 0; i < mochiElements.length; i++) {
//   mochiElements[i].addEventListener("click", function() {
//     alert("You clicked Mochi!");
//   });
// }
// const milkyElements = document.getElementsByClassName("milky");
// for (let i = 0; i < milkyElements.length; i++) {
//   milkyElements[i].addEventListener("click", function() {
//     alert("You clicked Milky!");
//   });
// }
// const maxxieElements = document.getElementsByClassName("maxxie");
// for (let i = 0; i < maxxieElements.length; i++) {
//   maxxieElements[i].addEventListener("click", function() {
//     alert("You clicked Maxxie!");
//   });
// }
// const tisoyElements = document.getElementsByClassName("tisoy");
// for (let i = 0; i < tisoyElements.length; i++) {
//   tisoyElements[i].addEventListener("click", function() {
//     alert("You clicked Tisoy!");
//   });
// }

// const darkLightButton = document.getElementById("dark-light-btn");
// const icon = document.getElementById("light-dark");
// const body = document.body;



// const darkLightButton = document.getElementById("dark-light-btn");
// const icon = document.getElementById("light-dark");
// const body = document.body;

// // Set the initial state to light mode
// body.classList.add("body-container-light");
// body.style.color = "#000"; // Set text color to black

// darkLightButton.addEventListener("click", function() {
//     if (icon.classList.contains("fa-lightbulb-on")) {
//         // Switch to dark mode
//         icon.classList.remove("fa-lightbulb-on");
//         icon.classList.add("fa-moon-stars");
//         icon.style.setProperty("--fa-primary-color", "#141414");
//         icon.style.setProperty("--fa-secondary-color", "#f5e928");

//         body.classList.remove("body-container-light");
//         body.classList.add("body-container-dark");
//         body.style.color = "#fff"; // Set text color to white
//     } else {
//         // Switch to light mode
//         icon.classList.remove("fa-moon-stars");
//         icon.classList.add("fa-lightbulb-on");
//         icon.style.setProperty("--fa-primary-color", "#ffffff");
//         icon.style.setProperty("--fa-secondary-color", "#f5e928");

//         body.classList.remove("body-container-dark");
//         body.classList.add("body-container-light");
//         body.style.color = "#000"; // Set text color to black
//     }
// });