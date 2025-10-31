//  animation
const fullText = "Aspiring Web Developer | Passionate about Building Interactive Websites.";
const typingElement = document.getElementById("typing");
let index = 0;

function typeWriter() {
  if (index < fullText.length) {
    typingElement.innerHTML += fullText.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  } else {
    setTimeout(() => {
      typingElement.innerHTML = "";
      index = 0;
      typeWriter();
    }, 2000);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);

// Mobile 
const mobileMenu = document.getElementById('mobile-menu');
const navbarLinks = document.querySelector('.navbar-links');

mobileMenu.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
