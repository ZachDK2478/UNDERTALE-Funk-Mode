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
                 
