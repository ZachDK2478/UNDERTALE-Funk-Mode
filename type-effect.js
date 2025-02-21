document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".textbox p").forEach((p, index) => {
        console.log(`Processing textbox #${index + 1}`);

        let originalHTML = p.innerHTML; // Save original content (including links)
        console.log(`Original HTML: ${originalHTML}`);

        let textContent = p.innerHTML.trim(); // Keep full HTML instead of text-only
        console.log(`Extracted text content: ${textContent}`);

        p.innerHTML = ""; // Clear text for animation
        let i = 0;

        function typeWriter() {
            if (i < textContent.length) {
                p.innerHTML = textContent.substring(0, i + 1); // Preserve HTML while typing
                i++;
                setTimeout(typeWriter, 96); // Adjust speed here
            } else {
                console.log(`Finished typing for textbox #${index + 1}`);
            }
        }

        typeWriter(); // Start typing effect
    });
});
