const lines = [
    "Hello! I'm Julyza Pena, a 23-year-old IT student at FEU Institute of Technology, specializing in Web and Mobile Applications.",
    "Beyond the books, I'm passionate about exploring new destinations and immersing myself in mobile games for both entertainment and inspiration.",
    "My academic journey is shaped by technology and design, while my heart finds joy in discovering new places and enjoying mobile gaming experiences.",
    "I aim to blend technology with my love for travel and gaming. This website offers a glimpse into my diverse interests, from coding projects to travel adventures and gaming escapades.",
    "Join me on this journey! Whether discussing tech trends, sharing travel stories, or exchanging mobile game recommendations, I'm excited to connect!"
];

let lineIndex = 0;
let charIndex = 0;

function type() {
    if (lineIndex < lines.length) {
        const currentLine = lines[lineIndex];
        const currentText = currentLine.slice(0, charIndex++);
        document.getElementById(`line${lineIndex + 1}`).textContent = currentText;

        if (charIndex > currentLine.length) {
            charIndex = 0;
            lineIndex++;
        }
        setTimeout(type, 3);
    }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function typeOnScroll() {
    const aboutMeSection = document.getElementById("about-me");
    if (isInViewport(aboutMeSection)) {
        type();
        window.removeEventListener("scroll", typeOnScroll); // Remove the event listener once typing has started
    }
}

window.addEventListener("scroll", typeOnScroll);