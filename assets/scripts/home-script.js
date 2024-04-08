import * as global from "./global-scripts.js";

const btnChangeTheme = document.querySelector("body > button");
btnChangeTheme.addEventListener("click", () => {
    const themes = ["darkTheme", "lightTheme"];
    document.body.className = document.body.className === themes[0] ? themes[1] : themes[0];
});