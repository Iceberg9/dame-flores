<?php
header('Content-type: application/javascript');

require_once("conekta/lib/Conekta.php");

class MyConekta {
	
	public static $api_key = 'key_1KDEgh68NhTPrjw53E8uTQ';
	public static $description = 'Membresia Anual SCWS';	
	public static $currency = 'mxn';	

	//Function to validate if the token does exist
	public static function check_token($token){
		if ($token == $_SESSION['token'])
			return true;

		return false;
	}

	//Function to generate a md5 32digits token
	public static function tokengenerator($len = 32){		
		//seed
		$keychars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";				
		// RANDOM KEY GENERATOR
		$id = "";
		$max = strlen($keychars) - 1;
		
		for ($i=0;$i<$len;$i++)
			$id .= substr($keychars, rand(0, $max), 1);
		
		return md5($id);
	}

	//Function to make payments with a Credit/Debit Card
	public static function card($amount, $number, $exp_month, $exp_year, $cvc, $name, $email_shopify, $name_shopify, $meses_card){

		Conekta::setApiKey(self::$api_key);

		if ($meses_card == '3') {
					$data = array(
						'card' => array(
							'number' => $number, 
							'exp_month' => $exp_month, 
							'exp_year' => $exp_year, 
							'cvc' => $cvc, 
							'name' => $name
							), 
						'details'=> array(
						    "name"=> $name_shopify,
						    'email'=> $email_shopify,
						    'line_items'=> array(
						      array(
						        'name'=>'Membresia Anual SCWS',
						        'sku'=>'scws_001',
						        'unit_price'=> $amount,
						        'description'=>'Pase anual para SCWS',
						        'quantity'=> 1,
						        'type'=>"membership-scws"
				        		),
				        	),
				        ),
						'description' => self::$description, 
						'amount' => $amount,
						'monthly_installments' => '3',
						'currency' => self::$currency
						);
			} elseif ($meses_card == '6') {
					$data = array(
							'card' => array(
								'number' => $number, 
								'exp_month' => $exp_month, 
								'exp_year' => $exp_year, 
								'cvc' => $cvc, 
								'name' => $name
								), 
							'details'=> array(
							    "name"=> $name_shopify,
							    'email'=> $email_shopify,
							    'line_items'=> array(
							      array(
							        'name'=>'Membresia Anual SCWS',
							        'sku'=>'scws_001',
							        'unit_price'=> $amount,
							        'description'=>'Pase anual para SCWS',
							        'quantity'=> 1,
							        'type'=>"membership-scws"
					        		),
					        	),
					        ),
							'description' => self::$description, 
							'amount' => $amount,
							'monthly_installments' => '6',
							'currency' => self::$currency
							);
			} elseif ($meses_card == '12') {
					$data = array(
							'card' => array(
								'number' => $number, 
								'exp_month' => $exp_month, 
								'exp_year' => $exp_year, 
								'cvc' => $cvc, 
								'name' => $name
								), 
							'details'=> array(
							    "name"=> $name_shopify,
							    'email'=> $email_shopify,
							    'line_items'=> array(
							      array(
							        'name'=>'Membresia Anual SCWS',
							        'sku'=>'scws_001',
							        'unit_price'=> $amount,
							        'description'=>'Pase anual para SCWS',
							        'quantity'=> 1,
							        'type'=>"membership-scws"
					        		),
					        	),
					        ),
							'description' => self::$description, 
							'amount' => $amount,
							'monthly_installments' => '12',
							'currency' => self::$currency
							);
			} else {
					$data = array(
							'card' => array(
								'number' => $number, 
								'exp_month' => $exp_month, 
								'exp_year' => $exp_year, 
								'cvc' => $cvc, 
								'name' => $name
								), 
							'details'=> array(
							    "name"=> $name_shopify,
							    'email'=> $email_shopify,
							    'line_items'=> array(
							      array(
							        'name'=>'Membresia Anual SCWS',
							        'sku'=>'scws_001',
							        'unit_price'=> $amount,
							        'description'=>'Pase anual para SCWS',
							        'quantity'=> 1,
							        'type'=>"membership-scws"
					        		),
					        	),
					        ),
							'description' => self::$description, 
							'amount' => $amount,
							'currency' => self::$currency
							);
			}

		

		try {
		  $charge = Conekta_Charge::create($data);  
		  //echo 'ok';
		  echo 'handleP' . '(true);' ;
		} 
		catch (Exception $e) {
		  // Catch all exceptions including validation errors.
		  //echo $e->getMessage(); 
		  echo 'handleP' . '(false);' ;
		}
	}
	//END OF CLASS
}