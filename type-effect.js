document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".textbox p").forEach(p => {
        let text = p.innerHTML; // Store the full original content (including links)
        p.innerHTML = ""; // Clear the text first
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                p.innerHTML = text.substring(0, i + 1); // Add one letter at a time
                i++;
                setTimeout(typeWriter, 30); // Speed of typing effect
            }
        }

        // Delay execution to ensure all text boxes run the effect
        setTimeout(typeWriter, 100); 
    });
});
