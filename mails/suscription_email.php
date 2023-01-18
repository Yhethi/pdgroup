<?php
	require 'mail/PHPMailerAutoload.php';

	
	$nombre = utf8_decode($_POST['nombre']);
	$email = $_POST['email'];
	

	$destino = "xxxxxx@gmail.com";
	// $destino = "comercialweb@websourcing.com.co";


	$asunto = 'Suscripcion PD GROUP';

	$texto_mensaje = "El correo de la suscripcion es: ".$email.", del cliente: ".$nombre;
	

	// $destino = "comercialweb@websourcing.com.co";

	// $asunto = 'Suscripcion a Websoursing de boletin';

	// $texto_mensaje = $email;
	 
	//Create a new PHPMailer instance
	$mail = new PHPMailer();
	$mail->IsSMTP();
	 
	//Configuracion servidor mail
	$mail->FromName = 'Contacto - WebSourcing'; //remitente
	$mail->From = 'comercial@websourcing.com.co'; //remitente
	$mail->SMTPAuth = true;
	$mail->SMTPSecure = 'ssl'; //seguridad
	$mail->Host = 'mail.websourcing.com.co'; // servidor smtp
	$mail->Port = 465; //puerto
	$mail->Username ='comercialweb@websourcing.com.co'; //nombre usuario
	$mail->Password = 'fe;%xj9I~hJU'; //contraseña
	$mail->SMTPDebug = 0; // prueba de errores

	//Agregar destinatario
	$mail->AddAddress($destino);
	$mail->Subject = $asunto;
	$mail->Body = $texto_mensaje;
	 
	//Avisar si fue enviado o no y dirigir al index
	if ($mail->Send()) {
		header('Location: ../index.html');
	}

?>