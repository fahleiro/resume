import cards from './cardsData.js';
import { renderCards } from './cardsRenderer.js';
import { setTechData, openModal, closeModal } from './modal.js';

// Expõe funções globalmente para os event handlers inline
window.openModal = openModal;
window.closeModal = closeModal;

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    setTechData(cards);
    renderCards(cards, 'cardsGrid');
});
