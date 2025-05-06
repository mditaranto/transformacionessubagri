// 1. Obtener el modal y la imagen dentro de él
const modal = document.getElementById('img-modal');
const modalImg = modal.querySelector('img');

// 2. Buscar todas las imágenes con la clase .click-zoom
document.querySelectorAll('.click-zoom img').forEach(img => {
  
  // 3. Añadir evento de clic a cada imagen
  img.addEventListener('click', () => {

    // 4. Mostrar el modal
    modal.classList.add('active');

    // 5. Poner en el modal la misma imagen que la que se ha hecho clic
    modalImg.src = img.src;
  });
});

// 6. Cerrar el modal al hacer clic fuera de la imagen (en el fondo oscuro)
modal.addEventListener('click', () => {
  modal.classList.remove('active');
});