document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".textbox p").forEach(p => {
        let text = p.innerHTML;
        p.innerHTML = ""; // Clear text first
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                p.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 30); // Speed of typing effect
            }
        }
        typeWriter();
    });
});
