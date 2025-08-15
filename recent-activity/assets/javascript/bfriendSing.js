const beepSounds = [
    "assets/audio/sfx/Bfriend/Beep1.ogg",
    "assets/audio/sfx/Bfriend/Beep2.ogg",
    "assets/audio/sfx/Bfriend/Beep3.ogg",
    "assets/audio/sfx/Bfriend/Beep4.ogg",
    "assets/audio/sfx/Bfriend/Beep5.ogg"
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playBfriendNote() {
    const audio = document.getElementById('beep-player');
    const randomIndex = getRandomInt(beepSounds.length);
    audio.src = beepSounds[randomIndex];
    audio.currentTime = 0;
    audio.play();
}