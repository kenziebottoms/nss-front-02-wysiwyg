"use strict";

const textInput = document.getElementById("text-input");
let activeCard;

function activateEvents() {
    document.getElementById("main-content").addEventListener("click", event => {
        let card = event.srcElement.closest("person");
        focusCard(card);
    });
    document.getElementById("text-input").addEventListener("keyup", event => {
        if (event.keyCode == 13) {
            setActiveCard(null);
        } else {
            let card = getActiveCard();
            let ps = card.getElementsByTagName("p");
            let p = [...ps][0];
            p.innerHTML = textInput.value;
        }
    });
}

function focusCard(card) {
    // add .active to this card and remove it from all other cards
    let activeElements = [...document.getElementsByClassName("active")];
    activeElements.forEach(element => {
        element.classList.remove("active");
    });
    card.className = "active";
    // bond input with .bio
    textInput.focus();
    setActiveCard(card);
}

function setActiveCard(card) {
    activeCard = card;
}
function getActiveCard() {
    return activeCard;
}

module.exports = {activateEvents};