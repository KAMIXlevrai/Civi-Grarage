const games = [
    { title: "Honda Civic TypeR EK9", image: "https://delessencedansmesveines.com/wp-content/uploads/2024/04/z-DLEDMV-2024-Honda-Civic-Type-R-EK9-027.jpeg", url: "./car/Civic/index.html" },
    { title: "Ford Focus Rs (2016)", image: "https://www.largus.fr/images/images/essai-ford-focus-rs-350-2016-bleu-nitrous-11_1.jpg", url: "./car/Focus/index.html" },
    { title: "Dodge Challenger SRT", image: "https://img4.autodeclics.com/photo_article/78864/9723/1200-L-840-ch-et-2-3-secondes-pour-le-0-a-60-mph.jpg", url: "./car/Challenger/index.html" }
];

let currentPage = 0;
const gamesPerPage = 6;
let filteredGames = [...games];

function renderGames() {
    const gameList = document.getElementById("game-list");
    gameList.innerHTML = "";
    const start = currentPage * gamesPerPage;
    const end = start + gamesPerPage;

    filteredGames.slice(start, end).forEach(game => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h2>${game.title}</h2>
            <a href="#" class="download-btn" onclick="confirmDownload('${game.url}', '${game.title}')">Modifier</a>
        `;
        gameList.appendChild(card);
    });

    updatePagination();
}

function filterGames() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    filteredGames = games.filter(game => game.title.toLowerCase().includes(searchTerm));
    currentPage = 0;
    renderGames();
}

function updatePagination() {
    const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
    const paginationContainer = document.querySelector(".pagination");
    paginationContainer.innerHTML = "";

    for (let i = 0; i < totalPages; i++) {
        const button = document.createElement("button");
        button.innerText = i + 1;
        button.onclick = () => {
            currentPage = i;
            renderGames();
        };
        if (i === currentPage) button.classList.add("active");
        paginationContainer.appendChild(button);
    }
}

function confirmDownload(url, title) {
    if (confirm(`Voulez-vous modifier ${title} ?`)) {
        window.open(url, "_blank");
    }
}

renderGames();
