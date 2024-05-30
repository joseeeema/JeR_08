const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  // Obtener el ancho y alto originales del canvas
  const originalWidth = 800; // Reemplaza con el ancho original de tu canvas
  const originalHeight = 600; // Reemplaza con el alto original de tu canvas

  // Calcular el nuevo tamaño manteniendo el aspecto
  const windowAspect = window.innerWidth / window.innerHeight;
  const originalAspect = originalWidth / originalHeight;

  if (windowAspect > originalAspect) {
    canvas.style.width = '100vw';
    canvas.style.height = `${(100 * originalHeight) / originalWidth}vh`;
  } else {
    canvas.style.height = '100vh';
    canvas.style.width = `${(100 * originalWidth) / originalHeight}vw`;
  }

  // Actualizar el tamaño del lienzo del canvas
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  // Aquí puedes realizar cualquier otra actualización necesaria en el canvas
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Llamar a la función una vez al cargar la página
