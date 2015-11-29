<?php
header('Access-Control-Allow-Origin: *');
?>
<html>
<head><title>PHP Mail Sender</title></head>
<body>
<?php

$email_customer = $_POST['m_customer'];
$name_customer = $_POST['n_customer'];


/* All form fields are automatically passed to the PHP script through the array $HTTP_POST_VARS. */
//$email = $HTTP_POST_VARS['email'];
//$email = 'hola@doctype.com.mx';
$email = $email_customer;
//$subject = $HTTP_POST_VARS['subject'];
$subject = 'Confirmación de Compra - Membresía anual SCWS';
//$message = $HTTP_POST_VARS['message'];


$headers = "From: Sea Cost Wine Spirit 'ivan@seacoastwine.com'\r\n";
$headers .= "Reply-To: ivan@seacoastwine.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


$message = '
	<div style="background: #f4f4f4; margin-bottom: 40px; padding:25px 15px">
		<img src="https://iceberg9.com/shopify-assets/scws/membership-script/sidebar_logo.png" width="35%">
	</div>
	Estimado '. $name_customer . ',<br>
	<br>
	Registramos exitosamente el pago de tu Membresía Anual SCWS. Ten en cuenta que lleva un <strong>proceso de 24hrs tener habilitada dicha membresía</strong> en nuestra tienda. Recibiras un email cuando dicho proceso este finalizado.<br>
	<br>
	Agradecemos tu preferencia,<br>
	- Sea Cost Wine & Spirit.
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