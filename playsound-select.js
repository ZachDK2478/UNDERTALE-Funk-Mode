document.addEventListener("DOMContentLoaded", function () {
    let selectSound = new Audio("audio/snd_select.mp3"); // Change to your correct file path

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default navigation

            // Open the link in a new tab FIRST
            let newTab = window.open(link.href, "_blank");

            // Play sound AFTER opening the new tab
            selectSound.play();
        });
    });
});
