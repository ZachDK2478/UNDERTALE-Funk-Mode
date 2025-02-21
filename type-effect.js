console.log("JavaScript file loaded successfully!");

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded!");

    document.querySelectorAll(".textbox p").forEach((p, index) => {
        console.log(`Processing textbox #${index + 1}`);

        let originalHTML = p.innerHTML; // Save original content (including links)
        console.log(`Original HTML: ${originalHTML}`);

        let textContent = p.textContent.trim(); // Extract text only
        console.log(`Extracted text content: ${textContent}`);

        p.innerHTML = ""; // Clear text for animation
        let i = 0;

        function typeWriter() {
            if (i < textContent.length) {
                p.innerHTML += textContent.charAt(i); // Type one letter at a time
                i++;
                setTimeout(typeWriter, 30); // Adjust speed here
            } else {
                console.log(`Finished typing for textbox #${index + 1}`);
            }
        }

        typeWriter(); // Start typing effect
    });
});
