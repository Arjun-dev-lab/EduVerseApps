document.getElementById("learnMoreButton").addEventListener("click", function() {
    const learnMoreSection = document.getElementById("learnMoreSection");
    learnMoreSection.style.display = (learnMoreSection.style.display === "none" || learnMoreSection.style.display === "") ? "block" : "none";
    this.textContent = learnMoreSection.style.display === "block" ? "Show Less" : "Learn More About Our Vision";
});
