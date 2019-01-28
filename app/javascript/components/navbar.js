var initUpdateNavbarOnScroll = () => {
  var navbar = document.querySelector('.navbar-home');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight - 600) {
        navbar.classList.remove('navbar-home');
      } else {
        navbar.classList.add('navbar-home');
      }
    });
  }
};

export { initUpdateNavbarOnScroll };
