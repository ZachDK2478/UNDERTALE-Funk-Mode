alert("JavaScript is working!");

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".textbox p").forEach(p => {
        let originalHTML = p.innerHTML; // Save original HTML (including links)
        let textContent = p.textContent; // Extract only the visible text for typing effect
        p.innerHTML = ""; // Clear text first
        let i = 0;

        function typeWriter() {
            if (i < textContent.length) {
                // Find the part of the original HTML up to the current character
                let currentText = textContent.substring(0, i + 1);
                let tempDiv = document.createElement("div");
                tempDiv.innerHTML = originalHTML;

                // Go through each element inside tempDiv and update its text accordingly
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
                p.innerHTML = tempDiv.innerHTML;

                i++;
                setTimeout(typeWriter, 30); // Adjust speed here
            }
        }

        typeWriter(); // Start effect
    });
});
