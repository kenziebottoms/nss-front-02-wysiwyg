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
}

module.exports = {activateEvents};