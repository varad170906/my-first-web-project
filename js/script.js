const button = document.getElementById("btn");
const title = document.getElementById("title");

button.addEventListener("click", function () {
    title.textContent = "You Clicked the Button!";
});
