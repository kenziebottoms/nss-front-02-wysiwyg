"use strict";

function addCard(person) {
    let card = document.createElement("person");
    
    let header = document.createElement("header");
    let h1 = document.createElement("h1");
    h1.innerText = person.name;
    let h2 = document.createElement("h2");
    h2.innerText = person.title;
    header.appendChild(h1);
    header.appendChild(h2);
    card.appendChild(header);

    let section = document.createElement("section");
    let bio = document.createElement("div");
    let p = document.createElement("p");
    let img = document.createElement("img");
    img.src = person.image;
    bio.appendChild(img);
    p.innerHTML += person.bio;
    bio.appendChild(p);
    bio.classList = "bio";
    section.appendChild(bio);
    card.appendChild(section);

    let footer = document.createElement("footer");
    footer.innerText = `${person.lifespan.birth} - ${person.lifespan.death == 0 ? "" : person.lifespan.death}`;
    card.appendChild(footer);
    
    document.getElementById("main-content").appendChild(card);
}

module.exports = {addCard};