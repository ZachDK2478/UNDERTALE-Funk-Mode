const gfBeepSounds = [
    "assets/audio/sfx/Gfriend/Beep1.ogg",
    "assets/audio/sfx/Gfriend/Beep2.ogg",
    "assets/audio/sfx/Gfriend/Beep3.ogg",
    "assets/audio/sfx/Gfriend/Beep4.ogg",
    "assets/audio/sfx/Gfriend/Beep5.ogg",
    "assets/audio/sfx/Gfriend/Beep6.ogg",
    "assets/audio/sfx/Gfriend/Beep7.ogg",
    "assets/audio/sfx/Gfriend/Beep8.ogg",
    "assets/audio/sfx/Gfriend/Beep9.ogg",
    "assets/audio/sfx/Gfriend/Beep10.ogg",
    "assets/audio/sfx/Gfriend/Beep11.ogg"
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playGfriendNote() {
    const audio = document.getElementById('beep-spinner');
    const randomIndex = getRandomInt(gfBeepSounds.length);
    audio.src = gfBeepSounds[randomIndex];
    audio.currentTime = 0;
    audio.play();
}