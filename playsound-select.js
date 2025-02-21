document.addEventListener("DOMContentLoaded", function () {
    let selectSound = new Audio("audio/snd_select.mp3"); // Ensure the path is correct

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent immediate navigation

            // Play the sound directly from the click event
            selectSound.play();

            // Use setTimeout to give it time to start playing before navigating
            selectSound.oncanplaythrough = function () {  // Ensures audio is ready to play
                window.open(link.href, "_blank");  // Open the link in a new tab
            };
        });
    });
});
