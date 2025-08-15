const playerIds = ["yt-player1", "yt-player2"];
const players = [];

function onYouTubeIframeAPIReady() {
  playerIds.forEach((id) => {
    const player = new YT.Player(id, {
      events: {
        onStateChange: onPlayerStateChange
      }
    });
    players.push(player);
  });
}

function onPlayerStateChange(event) {
  if (!window.bgMusicReady || !window.bgMusic) {
    setTimeout(() => onPlayerStateChange(event), 200);
    return;
  }

  if (event.data === YT.PlayerState.PLAYING) {
    bgMusic.pause();
  } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
    setTimeout(() => {
      const anyPlaying = players.some(p => {
        try {
          return p.getPlayerState() === YT.PlayerState.PLAYING;
        } catch (e) {
          return false;
        }
      });
      if (!anyPlaying) {
        bgMusic.play().catch(() => {
          console.warn("Autoplay blocked on resume.");
        });
      }
    }, 300);
  }
}