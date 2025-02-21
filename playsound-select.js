document.addEventListener("DOMContentLoaded", function () {
    let selectSound = new Audio("audio/snd_select.mp3"); // Ensure the path is correct

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default navigation

            // Start the sound immediately
            selectSound.play();

            // Open the link in a new tab after a slight delay (300ms)
            setTimeout(() => {
                window.open(link.href, "_blank");
            }, 300); // Allow time for sound to play before opening the new tab
        });
    });
});
