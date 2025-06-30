// Acknowledge the script has loaded, as in the original file.
console.log("Sinterklaas Edam site script loaded.");

document.addEventListener('DOMContentLoaded', function() {

  // --- Scroll to Top Button Functionality ---
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show button when user scrolls down 200px
  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  // When the user clicks on the button, scroll to the top of the document
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // --- Smooth Scrolling for Navigation Links ---
  // The 'scroll-behavior: smooth;' in CSS handles this for modern browsers,
  // but this JS provides a fallback and more control if needed.
  // This example relies on the CSS implementation for simplicity.
  // If you needed a more complex solution (e.g., with offsets), you would implement it here.
  
  console.log("Interactive elements initialized.");

});