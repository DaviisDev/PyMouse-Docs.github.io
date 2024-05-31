// script.js

const toggle = document.getElementById("toggle");
const refresh = document.getElementById("refresh");
const theme = window.localStorage.getItem("theme");

const rootStyles = getComputedStyle(document.documentElement);
const bgColorLight = rootStyles.getPropertyValue("--bg-grey-light");
const textColorDark = rootStyles.getPropertyValue("--text-dark");

if (theme === "dark") {
    document.body.classList.add("dark");
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const newTheme = document.body.classList.contains("dark") ? "dark" : "light";
    window.localStorage.setItem("theme", newTheme);
});

// Atualiza a página
refresh.addEventListener("click", () => {
    location.reload();
});

document.body.style.backgroundColor = bgColorLight;
document.body.style.color = textColorDark;
