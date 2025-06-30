const intro = document.getElementById('intro');
const audio = document.getElementById('bgMusic');
const content = document.getElementById('mainContent');

intro.addEventListener('click', () => {
  intro.classList.add('fade-out');

  audio.play().catch(e => console.error("Playback failed:", e));

  setTimeout(() => {
    intro.style.display = 'none';
    content.style.display = 'block';
  }, 5000);
});
