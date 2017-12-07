"use strict";

const view = require("./view");
const mainContent = document.getElementById("main-content");
const people = {
    "people": [
        {
            "name": "Ursula K. Le Guin",
            "title": "Author",
            "bio": "Ursula Kroeber Le Guin is an American author and illustrator of novels, children's books, and short stories, mainly fantasy and science fiction.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ursula_K_Le_Guin.JPG/330px-Ursula_K_Le_Guin.JPG",
            "lifespan": {
                "birth": 1929,
                "death": 0
            }
        },
        {
            "name": "N. K. Jemisin",
            "title": "Author",
            "bio": "Nora K. Jemisin is an American speculative fiction writer and blogger. Her fiction explores a wide variety of themes, including cultural conflict and oppression.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/N._K._Jemisin.jpg/300px-N._K._Jemisin.jpg",
            "lifespan": {
                "birth": 1972,
                "death": 0
            }
        },
        {
            "name": "Octavia Butler",
            "title": "Author",
            "bio": "Octavia Estelle Butler was an American science fiction writer. A multiple recipient of both the Hugo and Nebula awards, in 1995 she became the first science fiction writer to receive the MacArthur Fellowship.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Butler_signing.jpg/338px-Butler_signing.jpg",
            "lifespan": {
                "birth": 1947,
                "death": 2006
            }
        },
        {
            "name": "Nnedi Okorafor",
            "title": "Author",
            "bio": "Nnedi Okorafor (full name: Nnedimma Nkemdili Okorafor; previously known as Nnedi Okorafor-Mbachu) is a Nigerian-American writer of fantasy, science fiction, and speculative fiction.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Nnedi_Okorafor_%2837108184821%29.jpg/330px-Nnedi_Okorafor_%2837108184821%29.jpg",
            "lifespan": {
                "birth": 1974,
                "death": 0
            }
        }
    ]
};

function populateCards() {
    people.people.forEach(person => {
        view.addCard(person);
    });
}

module.exports = {populateCards};