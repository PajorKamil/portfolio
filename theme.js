(function() {
    let onpageLoad = localStorage.getItem("theme") || "light";
    let element = document.body;
    let nav = document.querySelector('.nav');
    let button = document.querySelector('.theme-button');

    if (onpageLoad === "dark-mode") {
        element.classList.add("dark-mode");
        nav.classList.add("dark-mode");
    } else {
        element.classList.remove("dark-mode");
        nav.classList.remove("dark-mode");
    }
})();

function themeToggle() {
    let element = document.body;
    let nav = document.querySelector('.nav');
    let currentTheme = localStorage.getItem("theme") || "light";

    if (currentTheme === "dark-mode") {
        element.classList.remove("dark-mode");
        nav.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    } else {
        element.classList.add("dark-mode");
        nav.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-mode");
    }
}
