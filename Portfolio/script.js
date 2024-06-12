function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.slide');
    var index = 0;
  
    function showSlide() {
      if (index < slides.length) {
        slides[index].style.display = 'block';
        slides[index].style.transform = 'translateX(0)';
        index++;
        setTimeout(showSlide, 500); // Adjust timing as needed
      }
    }
  
    showSlide();
  });
  