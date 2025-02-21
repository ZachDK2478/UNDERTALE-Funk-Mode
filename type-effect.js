document.addEventListener("DOMContentLoaded", function () {
    // Text animation logic first
    document.querySelectorAll(".textbox p").forEach((p, index) => {
        console.log(`Processing textbox #${index + 1}`);

        let textContent = p.innerHTML.trim(); // Keep full HTML
        console.log(`Extracted text content: ${textContent}`);

        p.innerHTML = ""; // Clear text for animation
        let i = 0;

        function typeWriter() {
            if (i < textContent.length) {
                p.innerHTML = textContent.substring(0, i + 1); // Preserve HTML while typing
                i++;
                setTimeout(typeWriter, 20); // Adjust speed here
            } else {
                console.log(`Finished typing for textbox #${index + 1}`);
            }
        }

        typeWriter(); // Start typing effect
    });

    // Now handle background music and select sound after user interaction
    let isUserInteracted = false;

    document.addEventListener("click", function () {
        if (!isUserInteracted) {
            isUserInteracted = true;

            // Start background music and allow sound to play
            let bgMusic = document.getElementById("myaudio");
            bgMusic.volume = 0.5;
            bgMusic.play().catch(error => console.log("Background music autoplay blocked:", error));

            // Make the select sound available
            let selectSound = document.getElementById("select-sound");

            // Add click event listener to all links (without conflicting IDs)
            document.querySelectorAll("a").forEach(link => {
                link.addEventListener("click", function (event) {
                    event.preventDefault(); // Prevent immediate navigation

                    // Reset sound and play
                    selectSound.currentTime = 0;
                    selectSound.play().then(() => {
                        // Open the link in a new tab after 200ms delay
                        setTimeout(() => {
                            window.open(link.href, "_blank");
                        }, 200); // Ensures the sound plays first
                    }).catch(error => {
                        console.log("Audio playback blocked by browser:", error);
                        window.open(link.href, "_blank"); // Open the link even if sound is blocked
                    });
                });
            });
        }
    });
});
