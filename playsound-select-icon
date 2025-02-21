document.addEventListener("DOMContentLoaded", function () {
    // Create an audio element for the select sound
    let selectSound = new Audio("audio/select-sound.mp3");

    // Add click event to all hyperlinks
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            selectSound.play(); // Play sound when clicked
        });
    });
});
