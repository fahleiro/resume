let techData = {};

export function setTechData(cards) {
    cards.forEach(card => {
        techData[card.id] = {
            title: card.title,
            content: card.content
        };
    });
}

export function openModal(tech) {
    const data = techData[tech];
    if (!data) return;
    
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-body').innerHTML = data.content;
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

export function closeModal(event) {
    if (!event || event.target.id === 'modal' || event.target.classList.contains('close-modal')) {
        document.getElementById('modal').classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}
