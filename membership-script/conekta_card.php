<?php 
header('Acces-Control-Allow-Origin: http://dameflores.com/');
header('Content-type: application/javascript');

require_once 'MyConekta.php';
$amount 	= filter_input(INPUT_GET, 'amount');
$amount 	= (strstr($amount = $amount, '.')) ? str_replace('.', '', $amount) : $amount.'00';
$number 	= filter_input(INPUT_GET, 'number');
$exp_month 	= filter_input(INPUT_GET, 'exp_month');
$exp_year 	= filter_input(INPUT_GET, 'exp_year');
$cvc 		= filter_input(INPUT_GET, 'cvc');
$name 		= filter_input(INPUT_GET, 'name');
$email_shopify 		= filter_input(INPUT_GET, 'email_shopify');
$name_shopify  	= filter_input(INPUT_GET, 'name_shopify');
$meses_card  	= filter_input(INPUT_GET, 'meses_card');

MyConekta::card($amount, $number, $exp_month, $exp_year, $cvc, $name, $email_shopify, $name_shopify, $meses_card);