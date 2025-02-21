console.log("JavaScript file loaded successfully!");
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".textbox p").forEach(p => {
        let originalHTML = p.innerHTML; // Save original HTML (including links)
        let tempDiv = document.createElement("div");
        tempDiv.innerHTML = originalHTML; // Store original structure
        let charIndex = 0;
        let nodes = [];

        // Extract all text nodes while keeping their structure
        function extractNodes(element) {
            element.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    nodes.push({ node, text: node.textContent });
                } else {
                    extractNodes(node); // Recurse for nested elements
                }
            });
        }

        extractNodes(tempDiv);
        p.innerHTML = ""; // Clear text to start effect

        function typeWriter() {
            if (charIndex < nodes.length) {
                let { node, text } = nodes[charIndex];
                let span = document.createElement("span");

                function typeText(letterIndex = 0) {
                    if (letterIndex < text.length) {
                        span.textContent += text.charAt(letterIndex);
                        setTimeout(() => typeText(letterIndex + 1), 30); // Adjust typing speed
                    } else {
                        node.parentNode.replaceChild(span, node); // Restore node after typing
                        charIndex++;
                        typeWriter(); // Move to next node
                    }
                }

                typeText(); // Start typing this node
            }
        }

        typeWriter(); // Start effect
    });
});
