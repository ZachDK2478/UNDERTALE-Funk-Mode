const intro = document.getElementById('intro');
const audio = document.getElementById('bgMusic');
audio.volume = 0.5;
const mainContent = document.getElementById('mainContent');

intro.addEventListener('click', () => {
  intro.classList.add('fade-out');
  audio.play().catch(e => console.error("Playback failed:", e));

  intro.addEventListener('transitionend', () => {
    intro.style.display = 'none';
    mainContent.style.display = 'block';
    mainContent.classList.add('visible');
  }, { once: true });
});
