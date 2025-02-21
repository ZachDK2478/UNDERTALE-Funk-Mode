document.addEventListener("DOMContentLoaded", function () {
    let selectSound = new Audio("audio/snd_select.mp3");

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default navigation
            selectSound.play(); // Play sound

            // Open link in a new tab after a short delay
            setTimeout(() => {
                window.open(link.href, "_blank");
            }, 500); // 500ms delay for sound effect
        });
    });
});
