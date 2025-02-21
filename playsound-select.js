document.addEventListener("DOMContentLoaded", function () {
    let selectSound = new Audio("audio/snd_select.mp3"); // Ensure path is correct

    // Add click event listener for all links
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link navigation

            // Play the sound first
            selectSound.play();

            // Wait for the sound to start playing (adding a delay for browsers to load the sound)
            selectSound.oncanplaythrough = function () {
                // After the sound has started playing, open the link in a new tab
                window.open(link.href, "_blank");
            };
        });
    });
});
