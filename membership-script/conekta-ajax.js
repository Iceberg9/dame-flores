/*---------------------------------------------------------------------------
                            ONLINE PAYMENTS WITH CONEKTA INC.
---------------------------------------------------------------------------*/
 
function send_payment_card(){           

    var dataString = {
        'amount': $("#amount_card").val(),
        'name' : $("#name_card").val(),
        'number' : $("#number_card").val(),
        'cvc' : $("#exp_month_card").val(),
        'exp_month' : $("#exp_month_card").val(),
        'exp_year' : $("#exp_year_card").val(),
        'email_shopify' : $("#email_shopify").val(),
        'name_shopify' : $("#name_shopify").val(),
        'meses_card' : $("#meses_card").val()
    };

    if ($("#email_shopify").val() == '') {
        $('#response').removeClass('todo-ok');
        $('#response').addClass('proceso-error');
        $('#response').html('Error: Debes proporcionar un email valido.');
    } else if ($("#meses_card").val() == '0') {
        $('#response').removeClass('todo-ok');
        $('#response').addClass('proceso-error');
        $('#response').html('Error: Debes seleccionar una forma de pago.');
    } else {

        $.ajax({
            type: "GET",
            //url: "conekta_card.php",
            url: "https://iceberg9.com/shopify-assets/scws/membership-script/conekta_card.php",
            dataType: 'jsonp',
            data: dataString,
            jsonp: false,
            jsonpCallback: 'handleP'
            /*
            success: function(data) {           
                //$('#response').html(resp);
                if (data == 'ok') {
                    var c_n = $("#name_shopify").val();
                    var c_m = $("#email_shopify").val();

                    $('#response').html(data);

                    $.mail_customer(c_n, c_m);
                    $.mail_client(c_n, c_m);    

                } else {
                    $('#response').html(data);
                }
                
            }
            */
        }); 

    }
}

function handleP(data)
{
  if (data == true) {
    var c_n = $("#name_shopify").val();
    var c_m = $("#email_shopify").val();

    //$('#response').html(data);
    $('#response').removeClass('proceso-error');
    $('#response').addClass('todo-ok');
    $('#response').html('El proceso de compra fue Exitoso, en breve recibiras un email con la confirmación e instrucciones. Gracias.');

    $.mail_customer(c_n, c_m);
    $.mail_client(c_n, c_m); 

  } else {
    //$('#response').html(data);
    $('#response').removeClass('todo-ok');
    $('#response').addClass('proceso-error');
    $('#response').html('Lo sentimos, ocurrio un error, intenta de nuevo.');
  }
}

$.mail_customer = function(name_customer,mail_customer){
    $.post('https://iceberg9.com/shopify-assets/scws/membership-script/customer.php', {n_customer: name_customer, m_customer: mail_customer},
        function(respuesta){
            console.log('mail customer OK!');
            //alert('mail customer OK!'); //Mostramos un alert del resultado devuelto por el php
    });
    return false;
}

$.mail_client = function(name_customer_client,mail_customer_client){
    $.post('https://iceberg9.com/shopify-assets/scws/membership-script/client.php', {n_customer_client: name_customer_client, m_customer_client: mail_customer_client},
        function(respuesta){
            console.log('mail client OK!');
            //alert('mail client OK!'); //Mostramos un alert del resultado devuelto por el php
    });
    return false;
}