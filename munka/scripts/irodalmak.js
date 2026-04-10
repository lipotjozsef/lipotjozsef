// Helló, ha ezt olvasod :-) - Joci 2026. 04. 07.

const IsDevicePrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const darkModeClassName = "dark-mode";
const ulElement = document.querySelector("#link-list");

const usedMaterialLinks = [
    ["Wikipédia", "https://hu.wikipedia.org/wiki/Súrlódás"],
    ["Wikipédia", "https://en.wikipedia.org/wiki/Guillaume_Amontons"],
    ["Wikipédia", "https://en.wikipedia.org/wiki/Friction"]
    ["Netfizika", "https://www.netfizika.hu/tudas/node/14221"],
    ["Netfizika", "https://www.netfizika.hu/tudas/node/14225"],
    ["BME Robotalkalmazások", "https://mogi.bme.hu/TAMOP/robotalkalmazasok/ch06.html"]
];


document.body.onload = main;

function main() {
    fillUpLinks();
    enableDarkMode();
}

function fillUpLinks() {
    usedMaterialLinks.forEach(([name, link], index) => {
        const newItemElement = document.createElement("li");

        let showIndex = index + 1;
        let linkHTML = `<a href="${link}" target="_blank">\t${link}</a>`;
        newItemElement.innerHTML = `[${showIndex}] ${name}\t- ${linkHTML}`;
    
        ulElement.appendChild(newItemElement);
    })
}

function enableDarkMode() {
    if(IsDevicePrefersDark) {
        document.body.classList.add(darkModeClassName);
    }
}