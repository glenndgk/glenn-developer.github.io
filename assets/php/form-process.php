<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone_number = $_POST['phone_number'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Destinatario del correo
    $to = "glenncleone@gmail.com";  // Tu correo electrónico

    // Asunto
    $subject = "Nuevo mensaje de contacto: " . $subject;

    // Cuerpo del correo
    $body = "Nombre: $name\nEmail: $email\nTeléfono: $phone_number\n\nMensaje:\n$message";

    // Cabeceras del correo
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-type: text/plain; charset=UTF-8";

    // Enviar el correo
    if(mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
