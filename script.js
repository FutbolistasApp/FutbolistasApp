document.addEventListener("DOMContentLoaded", () => {
    const newsData = [
        { 
            title: "Título de Noticia 1",
            content: "Contenido de la noticia 1...",
            date: "2023-08-15"
        },
        { 
            title: "Título de Noticia 2",
            content: "Contenido de la noticia 2...",
            date: "2023-08-14"
        },
        // Agrega más noticias según sea necesario
    ];

    const newsSection = document.querySelector(".news");
    const matchesSection = document.querySelector(".matches");
    const standingsSection = document.querySelector(".standings");

    function displayNews() {
        newsSection.innerHTML = "<h2>Noticias</h2>";
        newsData.forEach(newsItem => {
            const article = document.createElement("article");
            article.className = "news-item";
            article.innerHTML = `
                <h3>${newsItem.title}</h3>
                <p>${newsItem.content}</p>
                <p>${newsItem.date}</p>
            `;
            newsSection.appendChild(article);
        });
    }

    function displayMatches() {
        matchesSection.innerHTML = "<h2>Partidos</h2>";
        matchesData.forEach(match => {
            const article = document.createElement("article");
            article.className = "match-item";
            article.innerHTML = `
                <h3>${match.homeTeam} vs ${match.awayTeam}</h3>
                <p>Resultado: ${match.score}</p>
                <p>Fecha: ${match.date}</p>
            `;
            matchesSection.appendChild(article);
        });
    }

    function displayStandings() {
        standingsSection.innerHTML = "<h2>Tabla de Posiciones</h2>";
        const table = document.createElement("table");
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Equipo</th>
                    <th>Puntos</th>
                </tr>
            </thead>
            <tbody id="standings-body"></tbody>
        `;
        standingsSection.appendChild(table);

        const standingsTable = document.getElementById("standings-body");
        standingsData.forEach(team => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${team.team}</td>
                <td>${team.points}</td>
            `;
            standingsTable.appendChild(row);
        });
    }

    displayNews();
    displayMatches();
    displayStandings();
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
            console.log('Service Worker registrado con éxito:', registration);
        })
        .catch(function(error) {
            console.log('Error al registrar el Service Worker:', error);
        });
}