const skillsButton = document.getElementById("skillsButton");
const skillsSection = document.getElementById("skillsSection");
const contactButton = document.getElementById("contactButton");
const contactInfo = document.getElementById("contactInfo");

skillsButton.addEventListener("click", () => {
    const isVisible = skillsSection.classList.toggle("is-visible");

    skillsButton.setAttribute("aria-expanded", isVisible);
    skillsSection.setAttribute("aria-hidden", !isVisible);
    skillsButton.textContent = isVisible ? "Hide Skills" : "Skills";
});

contactButton.addEventListener("click", () => {
    const isVisible = contactInfo.classList.toggle("is-visible");

    contactButton.setAttribute("aria-expanded", isVisible);
    contactInfo.setAttribute("aria-hidden", !isVisible);
    contactButton.textContent = isVisible ? "Hide Contact" : "Contact Me";
});
