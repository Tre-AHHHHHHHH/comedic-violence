
// COMEDIC VIOLENCE - INTERACTIVE EDITION

// 1. RANDOM FACT GENERATOR
const facts = [
    "Banana peels are one of the most famous cartoon hazards.",
    "Cartoon anvils always seem to fall at the perfect moment.",
    "Slapstick comedy uses exaggerated physical actions to make people laugh.",
    "A cartoon character can be flattened and bounce back seconds later.",
    "The classic pie-in-the-face gag has entertained audiences for generations.",
    "In cartoons, gravity sometimes takes a coffee break!"
];

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("factDisplay").textContent = facts[randomIndex];
}

// 2. LIGHT AND DARK MODE
function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

// 3. PERSONALIZED GREETING
function greetVisitor() {
    const name = document.getElementById("visitorName").value.trim();
    const greeting = document.getElementById("greetingDisplay");

    if (name === "") {
        greeting.textContent = "Please enter a name first!";
    } else {
        greeting.textContent = "Welcome to the chaos, " + name + "!";
    }
}

// 4. EVENT LISTENERS
document.getElementById("factButton").addEventListener("click", generateFact);

document.getElementById("themeButton").addEventListener("click", toggleTheme);

document.getElementById("greetingButton").addEventListener("click", greetVisitor);
