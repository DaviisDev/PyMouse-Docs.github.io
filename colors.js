// script.js

const toggle = document.getElementById("toggle");
const refresh = document.getElementById("refresh");
const theme = window.localStorage.getItem("theme");

if (theme === "dark") {
    document.body.classList.add("dark");
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const newTheme = document.body.classList.contains("dark") ? "dark" : "light";
    window.localStorage.setItem("theme", newTheme);
});

// Refresh the pages
refresh.addEventListener("click", () => {
    location.reload();
});