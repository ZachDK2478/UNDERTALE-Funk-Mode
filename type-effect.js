document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".textbox p").forEach(p => {
        let originalHTML = p.innerHTML; // Save the full original HTML (including <a> tags)
        let textContent = p.textContent; // Get only visible text
        let i = 0;
        p.innerHTML = ""; // Clear text box

        function typeWriter() {
            if (i < textContent.length) {
                // Create a temporary container to rebuild the HTML structure
                let tempDiv = document.createElement("div");
                tempDiv.innerHTML = originalHTML;

                let currentText = textContent.substring(0, i + 1);

                // Function to update text inside the temporary structure
                function updateText(element) {
                    if (element.nodeType === Node.TEXT_NODE) {
                        element.textContent = currentText.substring(0, element.textContent.length);
                    } else {
                        for (let child of element.childNodes) {
                            updateText(child);
                        }
                    }
                }

                updateText(tempDiv);
                p.innerHTML = tempDiv.innerHTML; // Apply updated content

                i++;
                setTimeout(typeWriter, 30); // Adjust speed here
            }
        }

        typeWriter(); // Start typing effect
    });
});
