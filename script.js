const navToggle = document.querySelector('.nav-responsive');
const navMenu = document.querySelector('#nav ul');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });