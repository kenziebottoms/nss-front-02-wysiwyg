"use strict";

const textInput = document.getElementById("text-input");

function activateEvents() {
    document.getElementById("main-content").addEventListener("click", event => {
        let card = event.srcElement.closest("person");
        focusCard(card);
    });
}

function focusCard(card) {
    let activeElements = [...document.getElementsByClassName("active")];
    activeElements.forEach(element => {
        element.classList.remove("active");
    });
    card.className = "active";
    textInput.focus();
    textInput.addEventListener("keyup", () => {
        let ps = card.getElementsByTagName("p");
        let p = [...ps][0];
        p.innerHTML = textInput.value;
    });
}

module.exports = {activateEvents};