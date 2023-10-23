document.addEventListener("DOMContentLoaded", function () {
    const catItems = document.querySelectorAll(".cat-item");
    const petsDisplay = document.getElementById("pets-display");
    const defaultImage = petsDisplay.querySelector("img");

    catItems.forEach((catItem) => {
        catItem.addEventListener("mouseenter", function () {
            const imgSrc = catItem.querySelector("img").src;
            defaultImage.src = imgSrc;
        });
    });
});
