// Mostrar el popup con mensaje e imagen al hacer clic
document.querySelectorAll('.event').forEach(event => {
  event.addEventListener('click', () => {
    const message = event.getAttribute('data-message');
    const imgSrc = event.getAttribute('data-img');

    document.getElementById('popup-text').innerText = message;
    document.getElementById('popup-img').src = imgSrc;
    document.getElementById('popup').style.display = 'block';
  });
});

// Cerrar popup al hacer clic en la X
document.getElementById('close-btn').addEventListener('click', () => {
  document.getElementById('popup').style.display = 'none';
});
