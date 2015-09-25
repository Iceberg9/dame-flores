<?php
header('Acces-Control-Allow-Origin: http://www.dameflores.com');
header('Content-type: application/javascript');

$apiKey = '4dff5f9616869fd6f8333fee75dd54af-us10';
$listId = '0e0480d860';
$double_optin=false;
$send_welcome=false;
$email_type = 'html';
$email = $_GET['email'];
//Data center, remplazarlo con el correcto
$submit_url = "http://us10.api.mailchimp.com/1.3/?method=listSubscribe";
$data = array(
    'email_address'=>$email,
    //'merge_vars' => array('MERGE1'=>$FNAME),
    'apikey'=>$apiKey,
    'id' => $listId,
    'double_optin' => $double_optin,
    'send_welcome' => $send_welcome,
    'email_type' => $email_type
);
$payload = json_encode($data);
 
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $submit_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, urlencode($payload));
 
$result = curl_exec($ch);
curl_close ($ch);
$data = json_decode($result);


if ( is_bool($data)  && $data == true){
	echo 'handleP' . '(true);' ;
} else {
	echo 'handleP' . '(false);' ;
}
?>