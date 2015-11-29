<?php
header('Access-Control-Allow-Origin: *');
?>
<html>
<head><title>PHP Mail Sender</title></head>
<body>
<?php

$email_customer = $_POST['m_customer_client'];
$name_customer = $_POST['n_customer_client'];

/* All form fields are automatically passed to the PHP script through the array $HTTP_POST_VARS. */
//$email = $HTTP_POST_VARS['email'];
$email = 'ivan@seacoastwine.com';
//$subject = $HTTP_POST_VARS['subject'];
$subject = 'Información del pedido: Membresía anual SCWS';
//$message = $HTTP_POST_VARS['message'];


$headers = "From: Sea Cost Wine Spirit 'no-reply@scws.com'\r\n";
$headers .= "Reply-To: ivan@seacoastwine.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


$message = '
	<div style="background: #f4f4f4; margin-bottom: 40px; padding:25px 15px">
		<img src="https://iceberg9.com/shopify-assets/scws/membership-script/sidebar_logo.png" width="35%">
	</div>
	Estimado Administrador,<br>
	<br>
	Se ha registrado la compra de: Membresía Anual SCWS. <br>
	La información del pedido es la siguiente:<br>
	<br>
	<strong>Información del Cliente</strong><br>
	Nombre: '. $name_customer .'<br>
	Email (shopiy):'. $email_customer . '<br>
	<br>
	<strong>Metodo de Pago</strong><br>
	- Conekta<br>
	<br>
	Debes habilitar al usuario con el tag dentro de Shopify "memberSCWS".
	<div style="border-top: solid 1px #ccc; margin-top: 35px;">
		<a href="http://seacoastwine.myshopify.com" title="Sea Cost Wine & Spirit"> seacoastwine.myshopify.com</a>
	</div>
';

/* PHP form validation: the script checks that the Email field contains a valid email address and the Subject field isn't empty. preg_match performs a regular expression match. It's a very powerful PHP function to validate form fields and other strings - see PHP manual for details. */
if (!preg_match("/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/", $email)) {
  echo "<h4>Invalid email address</h4>";
  echo "<a href='javascript:history.back(1);'>Back</a>";
} elseif ($subject == "") {
  echo "<h4>No subject</h4>";
  echo "<a href='javascript:history.back(1);'>Back</a>";
}

/* Sends the mail and outputs the "Thank you" string if the mail is successfully sent, or the error string otherwise. */
elseif (mail($email,$subject,$message,$headers)) {
  echo "<h4>Thank you for sending email</h4>";
} else {
  echo "<h4>Can't send email to $email</h4>";
}
?>
</body>
</html>