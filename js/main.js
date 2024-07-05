$(function () {
  // Selecciona todos los elementos de enlace de navegación dentro de un <ul> dentro de un <nav>
  let navLinks = document.querySelectorAll('nav ul li');

  // Agrega un listener para el evento de desplazamiento en la ventana
  window.addEventListener('scroll', e => {
    // Obtiene la distancia desde la parte superior de la página hasta la posición de desplazamiento actual
    let fromTop = window.scrollY;

    // Itera sobre cada enlace de navegación
    navLinks.forEach(link => {
      // Obtiene la sección del documento a la que apunta el enlace
      let section = document.querySelector(link.hash);

      // Verifica si la posición de desplazamiento actual está dentro de los límites de la sección
      if (
        section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop
      ) {
        // Si está dentro de los límites, agrega la clase 'current' al enlace de navegación
        link.classList.add('current');
      } else {
        // Si no está dentro de los límites, remueve la clase 'current' del enlace de navegación
        link.classList.remove('current');
      }
    });
  });

  // Agrega un listener para el evento de clic en los elementos <a>
  $('a').on('click', function () {
    // Desmarca todos los checkboxes cuando se hace clic en un enlace
    $('input[type=checkbox]').prop('checked', false);
  });
});