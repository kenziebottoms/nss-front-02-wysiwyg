"use strict";

function getCard(person) {
    let card = `<person>
        <header>
            <h1>${person.name}</h1>
            <h2>${person.title}</h2>
        </header>
        <section>
            <div class="bio">
                <img src="${person.image}">
                ${person.bio}
            </div>
        </section>
        <footer>
            ${person.lifespan.birth}
            &ndash;
            ${person.lifespan.death == 0 ? '' : person.lifespan.death}
        </footer>
    </person>`;
    return card;
}

module.exports = {getCard};