console.log("JavaScript file loaded successfully!");

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".textbox p").forEach(p => {
        let originalHTML = p.innerHTML; // Save full HTML, including links
        let tempDiv = document.createElement("div");
        tempDiv.innerHTML = originalHTML;

        let charIndex = 0;
        let textNodes = [];

        // Extract all text nodes while keeping structure
        function extractTextNodes(element) {
            element.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    textNodes.push({ node, text: node.textContent, parent: node.parentNode });
                } else {
                    extractTextNodes(node); // Recursively check nested elements
                }
            });
        }

        extractTextNodes(tempDiv);
        p.innerHTML = ""; // Clear text initially

        function typeWriter() {
            if (charIndex < textNodes.length) {
                let { node, text, parent } = textNodes[charIndex];
                let span = document.createElement("span");

                function typeText(letterIndex = 0) {
                    if (letterIndex < text.length) {
                        span.textContent += text.charAt(letterIndex);
                        setTimeout(() => typeText(letterIndex + 1), 30); // Adjust typing speed
                    } else {
                        parent.replaceChild(span, node); // Restore formatted elements
                        charIndex++;
                        typeWriter(); // Move to next node
                    }
                }

                typeText(); // Start typing for this text node
            }
        }

        typeWriter(); // Begin animation
    });
});
