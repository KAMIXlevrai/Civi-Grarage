const games = [
    { title: "Honda Civic TypeR EK9", image: "https://delessencedansmesveines.com/wp-content/uploads/2024/04/z-DLEDMV-2024-Honda-Civic-Type-R-EK9-027.jpeg", url: "./car/Civic/index.html" },
    { title: "Ford Focus Rs (2016)", image: "https://www.largus.fr/images/images/essai-ford-focus-rs-350-2016-bleu-nitrous-11_1.jpg", url: "./car/Focus/index.html" },
    { title: "Dodge Challenger SRT", image: "https://img4.autodeclics.com/photo_article/78864/9723/1200-L-840-ch-et-2-3-secondes-pour-le-0-a-60-mph.jpg", url: "./car/Challenger/index.html" },
    { title: "MClaren F1 (1993)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/1996_McLaren_F1_Chassis_No_63_6.1_Front.jpg/1200px-1996_McLaren_F1_Chassis_No_63_6.1_Front.jpg", url: "./car/mc f1/index.html" },
    { title: "BMW M5 e34", image: "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/topics/magazine-article-pool/2017/die-zweite-generation-des-m5/bmw-m5-e34-stage-02.jpg", url: "./car/m5e34/index.html" },
    { title: "Mercedes-Benz SLR Mclaren 722S Roadster (2009)", image: "https://i.ytimg.com/vi/RW2w5BhM6NM/maxresdefault.jpg", url: "./car/722s/index.html" },
    { title: "Mercedes-Benz G-Class G 550 (2013)", image: "https://media.ed.edmunds-media.com/mercedes-benz/g-class/2013/oem/2013_mercedes-benz_g-class_4dr-suv_g550_fq_oem_1_1600.jpg", url: "./car/classeg/index.html" }
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
