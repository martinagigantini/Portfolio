// Seleziona tutte le immagini nella griglia
const cards = document.querySelectorAll('.card img');

cards.forEach((img) => {
  img.addEventListener('click', () => {
    alert(`Hai cliccato su: ${img.alt}`);
  });
});

// Bottone "Guarda ora" è già gestito nell'HTML con onclick
