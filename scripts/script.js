const button = document.getElementById("button")
const nav = document.getElementById("nav");

button.addEventListener("click", () => {
    nav.classList.toggle("toggle"); //nav.classLists.toggle returns all classnames of the selected target (nav), and then passes in the class with the name of "toggle" as an argument to the toggle() method. This is nice because i don't need to make an if statement to check if the nav element is visible or invisible
});