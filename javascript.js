// Add animations and hover effects using JavaScript

// Navigation buttons hover effect
const navItems = document.querySelectorAll("nav ul li");
navItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.style.transform = "scale(1.1)";
    });

    item.addEventListener("mouseout", () => {
        item.style.transform = "scale(1)";
    });
});

// Project cards hover effect
const projectCards = document.querySelectorAll(".project");
projectCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
    });

    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "none";
    });
});

// Social media links hover effect
const socialLinks = document.querySelectorAll("ul li a");
socialLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#0056b3";
    });

    link.addEventListener("mouseout", () => {
        link.style.color = "#007bff";
    });
});
