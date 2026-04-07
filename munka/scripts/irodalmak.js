// Helló, ha ezt olvasod :-) - Joci 2026. 04. 07.

const ulElement = document.querySelector("#link-list");
const usedMaterialLinks = [
    ["Wikipédia", "https://hu.wikipedia.org/wiki/Súrlódás"],
    ["Wikipédia", "https://en.wikipedia.org/wiki/Guillaume_Amontons"],
    ["Netfizika", "https://www.netfizika.hu/tudas/node/14221"],
    ["Netfizika", "https://www.netfizika.hu/tudas/node/14225"],
    ["BME_Robotalkalmazások", "https://mogi.bme.hu/TAMOP/robotalkalmazasok/ch06.html"]
];

usedMaterialLinks.forEach( ([name, link], index) => {
    const newItemElement = document.createElement("li");

    newItemElement.innerHTML = `[${index+1}] ${name.replaceAll("_", " ")}\t- <a href="${link}" target="_blank">\t${link}</a>`;

    ulElement.appendChild(newItemElement);
})