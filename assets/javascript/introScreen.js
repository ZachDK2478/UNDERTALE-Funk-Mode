const intro = document.getElementById('intro');
const audio = document.getElementById('bgMusic');
const mainContent = document.getElementById('mainContent');

intro.addEventListener('click', () => {
  intro.classList.add('fade-out');
  audio.play().catch(e => console.error("Playback failed:", e));

  intro.addEventListener('transitionend', () => {
    intro.style.display = 'none';
    mainContent.style.display = 'block';
    mainContent.classList.add('visible');  // trigger fade-in
  }, { once: true });
});
