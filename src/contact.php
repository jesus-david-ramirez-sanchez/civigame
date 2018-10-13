<?php
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    $asunto = "Mensaje de la Landing Page";

    #destino

    $destino = "info@civicamall.com";

    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $email . "\nMensaje: " . $mensaje;

    mail($destino, $asunto, $contenido);

    header("Location:../../index.html");
