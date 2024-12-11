AOS.init();

const toggleBtn = document.querySelector('.togglebtn');
const navLinks = document.querySelector('.navlinks');
const links=document.querySelector(".navlinks li");

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navLinks.classList.toggle("open");
});

document.querySelectorAll('.navlinks a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('active'); 
    });
});

const sociaLink = {
    facebook: 'https://www.facebook.com/share/axZpK3ajW5xF79MJ/',
    linkedin: 'https://www.linkedin.com/in/hina-fahim-021515313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: ' https://github.com/Hina628',
    instagram: 'https://www.instagram.com/hinayyy6/profilecard/?igsh=dG85b2lycTBnb2p1'
};

document.querySelectorAll('.social-icons').forEach(container => {
    container.innerHTML = `
        <a href="${socialLinks.facebook}" target="_blank"><i class="fab fa-facebook"></i></a>
        <a href="${socialLinks.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="${socialLinks.github}" target="_blank"><i class="fab fa-github"></i></a>
        <a href="${socialLinks.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
    `;
});

const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm, 'YOUR_PUBLIC_KEY')
        .then(() => {
            alert('Message sent successfully!');
            contactForm.reset(); 
        })
        .catch((error) => {
            console.error('Failed to send message:', error);
            alert('Failed to send message. Please try again later.');
        });
});

// Select all sections with the class 'animate-on-scroll'
const animatedSections = document.querySelectorAll('.animate-on-scroll');

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight - 100; // Adjust offset as needed
}

// Add scroll event listener to animate sections
window.addEventListener('scroll', () => {
  animatedSections.forEach((section) => {
    if (isInViewport(section)) {
      section.classList.add('animate');
      section.classList.remove('hidden');
    }
  });
});
