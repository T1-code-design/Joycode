// ...existing code...

// Toggle bio visibility when "View Bio" button is clicked
document.addEventListener("DOMContentLoaded", function() {
    const bioBtn = document.getElementById("bio-btn");
    const bioContainer = document.getElementById("Bio");

    // Hide bio by default
    bioContainer.style.display = "none";

    bioBtn.addEventListener("click", function(e) {
        e.preventDefault();
        if (bioContainer.style.display === "none") {
            bioContainer.style.display = "block";
            bioBtn.textContent = "Hide Bio";
        } else {
            bioContainer.style.display = "none";
            bioBtn.textContent = "View Bio";
        }
    });
});

// ...existing code...