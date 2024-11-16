// Smooth scroll when the "Explore" button is clicked
document.getElementById("exploreButton").addEventListener("click", function() {
    // Scroll to the section with the ID "servicesSection"
    document.getElementById("servicesSection").scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
