document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('show');
        observer.unobserve(entrada.target); // só anima 1 vez
      }
    });
  }, {
    threshold: 0.1
  });

  elementos.forEach(el => observer.observe(el));
});
