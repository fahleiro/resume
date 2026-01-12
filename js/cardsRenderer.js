export function renderCards(cards, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Ordena alfabeticamente pelo título
    const sortedCards = [...cards].sort((a, b) => 
        a.title.localeCompare(b.title)
    );

    container.innerHTML = sortedCards.map(card => `
        <div class="card" data-tech="${card.id}">
            <div class="card-header">
                <h2 class="card-title">${card.title}</h2>
            </div>
            <div class="card-content">
                <p>${card.summary}</p>
            </div>
            <button class="ver-mais" onclick="openModal('${card.id}')">Ver mais</button>
        </div>
    `).join('');
}
