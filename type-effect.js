document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".textbox p").forEach(p => {
        let originalHTML = p.innerHTML; // Save original HTML with <a> tags
        let textNodes = [];

        // Function to extract text nodes and store their positions
        function extractTextNodes(element) {
            element.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    textNodes.push({ node: node, text: node.textContent });
                } else {
                    extractTextNodes(node); // Recursively handle nested elements
                }
            });
        }

        extractTextNodes(p); // Extract all text nodes
        p.innerHTML = ""; // Clear the text box

        let i = 0;

        function typeWriter() {
            if (i < textNodes.length) {
                let { node, text } = textNodes[i];
                let span = document.createElement("span");
                span.textContent = text;
                node.parentNode.replaceChild(span, node); // Replace original text node
                i++;
                setTimeout(typeWriter, 30); // Adjust typing speed
            }
        }

        typeWriter(); // Start typing effect
    });
});
