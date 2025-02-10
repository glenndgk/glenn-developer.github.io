// contact-form.js

// Referencias a los elementos del formulario y mensajes
const contactForm = document.getElementById('contact-form');
const successMessage = document.querySelector('.message.success');
const dangerMessage = document.querySelector('.message.danger');

// Función para enviar el formulario mediante EmailJS
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_gt2k6zv','template_d6o4lpn', contactForm,'6UyZJYRqpFibsgb-z')
    .then(() => {
      // Muestra mensaje de éxito
      successMessage.style.display = 'block';
      dangerMessage.style.display = 'none';

      // Reinicia el formulario
      contactForm.reset();

      // Oculta el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 5000);
    }, (error) => {
      // Muestra mensaje de error y registra el error en la consola
      dangerMessage.style.display = 'block';
      successMessage.style.display = 'none';
      console.error('EmailJS error:', error);
    });
};

// Asocia la función sendEmail al evento submit del formulario
contactForm.addEventListener('submit', sendEmail);
