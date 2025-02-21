document.addEventListener("DOMContentLoaded", function () {
    let selectSound = new Audio("audio/snd_select.mp3"); // Make sure the path is correct

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default navigation

            // Play the sound first
            selectSound.play();

            // Open the link in a new tab after the sound has played (delay of 200ms)
            setTimeout(() => {
                window.open(link.href, "_blank"); // Open link in a new tab
            }, 1500); // Adjust the delay (1500ms) to ensure the sound plays before navigating
        });
    });
});
