const intro = document.getElementById('intro');
const mainContent = document.getElementById('mainContent');

window.bgMusic = document.getElementById('bgMusic');
window.bgMusicReady = false;

bgMusic.volume = 0.5;

intro.addEventListener('click', () => {
  intro.classList.add('fade-out');
  bgMusic.play().then(() => {
    window.bgMusicReady = true;
  }).catch(e => console.error("Playback failed:", e));

  intro.addEventListener('transitionend', () => {
    intro.style.display = 'none';
    mainContent.style.display = 'block';
    mainContent.classList.add('visible');
  }, { once: true });
});