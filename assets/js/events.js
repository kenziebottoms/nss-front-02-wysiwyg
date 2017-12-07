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
            if (card != null) {
                let ps = card.getElementsByTagName("p");
                let p = [...ps][0];
                p.innerHTML = textInput.value;
            }
        }
    });
}

function focusCard(card) {
    // bond input with .bio
    textInput.focus();
    setActiveCard(card);
}

function setActiveCard(card) {
    textInput.value = "";
    let activeElements = [...document.getElementsByClassName("active")];
    activeElements.forEach(element => {
        element.classList.remove("active");
    });
    if (card) {
        // add .active to this card and remove it from all other cards
        card.className = "active";
        activeCard = card;
    } else {
        activeCard = null;
    }
}
function getActiveCard() {
    return activeCard;
}

module.exports = {activateEvents};