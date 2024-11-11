document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de la manera tradicional
  
    // Obtener los datos del formulario
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const programInfo = document.getElementById('program-info').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Guardar los datos en el localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);
    localStorage.setItem('programInfo', programInfo);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
  
    // Confirmar que los datos han sido guardados
    alert('¡Gracias por tu mensaje! Hemos guardado tu información.');
  });
// Obtener el botón de cambio de tema y el cuerpo del documento
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body();

// Verificar si hay una preferencia guardada en el almacenamiento local
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
}

// Cambiar el tema cuando el botón sea presionado
themeToggleButton.addEventListener('click', () => {
  // Alternar la clase 'dark-mode'
  body.classList.toggle('dark-mode');

  // Guardar la preferencia del usuario en el almacenamiento local
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark-mode');
  } else {
    localStorage.setItem('theme', 'light-mode');
  }

  // Cambiar el ícono del botón según el tema activo
  const icon = themeToggleButton.querySelector('i');
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});
  