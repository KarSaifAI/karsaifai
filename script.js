window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.body.style.backgroundPosition = `center ${scrollY * 0.5}px`;
  });

  const cajas = document.querySelectorAll('.caja');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.2
  });
  
  cajas.forEach(caja => {
    observer.observe(caja);
  });