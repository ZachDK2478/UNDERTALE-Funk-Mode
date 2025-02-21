document.addEventListener("DOMContentLoaded", function () {
    let selectSound = new Audio();
    selectSound.src = "audio/select-sound.wav";
    selectSound.load(); // Force preload


    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Stop immediate navigation
            selectSound.play();

            // Open link in a new tab after a short delay
            setTimeout(() => {
                window.open(link.href, "_blank"); // Opens in a new tab
            }, 1000);
        });
    });
});
