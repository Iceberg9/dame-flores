var Ventana = $(window);

var ThisColeccion;

var ThisColeccionText;

function IniciarCarrusel(ThisColeccion, ThisColeccionText){

	var AnchoContenedor = $('.container').outerWidth();

	var SlidesVisibles;

	if (AnchoContenedor == 1170) {

		$('.SlidesCarrusel, .SlidesCarruselText').cycle('destroy');

		SlidesVisibles = 3;

		Carrusel(SlidesVisibles, ThisColeccion, ThisColeccionText);

	}
	else if(AnchoContenedor == 970){

		$('.SlidesCarrusel, .SlidesCarruselText').cycle('destroy');

		SlidesVisibles = 3;

		Carrusel(SlidesVisibles, ThisColeccion, ThisColeccionText);

	}
	else if(AnchoContenedor == 750){

		$('.SlidesCarrusel, .SlidesCarruselText').cycle('destroy');

		SlidesVisibles = 2;

		Carrusel(SlidesVisibles, ThisColeccion, ThisColeccionText, ThisColeccionText);

	}
	else if(AnchoContenedor <= 480){

		$('.SlidesCarrusel, .SlidesCarruselText').cycle('destroy');

		SlidesVisibles = 1;

		Carrusel(SlidesVisibles, ThisColeccion, ThisColeccionText, ThisColeccionText, ThisColeccionText);

	}
	else{

		$('.SlidesCarrusel, .SlidesCarruselText').cycle('destroy');

		SlidesVisibles = 2;

		Carrusel(SlidesVisibles, ThisColeccion, ThisColeccionText);

	};

}

function Carrusel(SlidesVisibles, ThisColeccion, ThisColeccionText){

	$('#' + ThisColeccion + ', #' + ThisColeccionText).cycle({

        fx: 'carousel',

        speed: 600,

        slides: 'div',

        paused: true,

        prev: '#PrevCarrusel',

        next: '#NextCarrusel',

        carouselVisible: SlidesVisibles,

        carouselFluid: true

	});

}

function ResizeCarrusel(){

	IniciarCarrusel(ThisColeccion, ThisColeccionText);

}

function Mensual(){

	$('.Tiempo').text('Semana');

	$('.Numeralia_2 .NumNumero').text('01');

	$('.Numeralia_2 .NumText').text('Un producto semanal por 1 mes $5,000 MXN');	

	var Elementos = $('<ul />');

	for (var i = 01; i < 05; i++) {

		if(i < 10){

			Elementos.append('<li id="MensualSemana-' + i + '" class="BotonTiempo" data-coleccion="MensualColeccion-' + i +'" data-coleccion-text="MensualColeccionText-' + i + '"><i class="fa fa-square-o"></i> ' + 0 + i + '</li>');

		}
		else{

			Elementos.append('<li id="MensualSemana-' + i + '" class="BotonTiempo" data-coleccion="MensualColeccion-' + i +'" data-coleccion-text="MensualColeccionText-' + i + '"><i class="fa fa-square-o"></i> ' + i + '</li>');

		}
		
	};

	$('.ContDias').html(Elementos);

	$('#MensualSemana-1').css('color', '#00acc1');

	BotonTiempo($('#MensualSemana-1'));

	$('.BotonTiempo').click(function(){

		This = $(this);

		BotonTiempo(This);

	});

	$('.Slides').click(function(){

		This = $(this);

		ClickSlides(This);

		if ($('input[name=Item-1]').val() != '' && $('input[name=Item-2]').val() != '' && $('input[name=Item-3]').val() != '' && $('input[name=Item-4]').val() != '') {

			$('#Boton_1').css('display', 'block');

			$('#SeccionConfirma .ContTituloOpcion').css({'border':'0'});

			$('#SeccionConfirma .Titulo_1').css({'font-size':'16px', 'font-weight':'700', 'line-height':'125%', 'text-transform':'uppercase'});

			$('#SeccionConfirma .ContenidoOpcion').css({'max-height':'500px'});

			$('#SeccionConfirma').css({'margin-bottom':'120px'});

			$('html, body').stop().animate({scrollTop:$('#TituloConfirmaMembresia').offset().top}, 'slow');

			$('#Boton_1').click(function(e){
				

				if($('#FormularioPlan_1 input[name=Plan]').val() == ''){

					e.preventDefault();

					$('.AvisoFaltante').text('Te falta elegir un plan');

				}

				else if($('#FormularioPlan_1 input[name=Item-1]').val() == ''){				

					$('.AvisoFaltante').text('Te falta elegir flores para la semana uno');

				}

				else if($('#FormularioPlan_1 input[name=Item-2]').val() == ''){

					e.preventDefault();

					$('.AvisoFaltante').text('Te falta elegir flores para la semana dos');

				}

				else if($('#FormularioPlan_1 input[name=Item-3]').val() == ''){

					e.preventDefault();

					$('.AvisoFaltante').text('Te falta elegir flores para la semana tres');

				}

				else if($('#FormularioPlan_1 input[name=Item-4]').val() == ''){

					e.preventDefault();

					$('.AvisoFaltante').text('Te falta elegir flores para la semana cuatro');

				}

				else if($('#FormularioPlan_1 input[name=DiaSemana]').val() == ''){

					e.preventDefault();

					$('.AvisoFaltante').text('Dinos que día quieres recibir tus flores');

				}

				else if($('#FormularioPlan_1 input[name=Horario]').val() == ''){

					e.preventDefault();

					$('.AvisoFaltante').text('En que horario quieres recibir tus flores');

				}

				else if($('#FormularioPlan_1 input[name=AceptoTerminos]').val() == ''){

					e.preventDefault();

					$('.AvisoFaltante').text('Por favor, acepta los términos y condiciones');

				}

			});

		};

	});
	

}

function Anual(){

	$('.Tiempo').text('Mes');

	$('.Numeralia_2 .NumNumero').text('12');

	$('.Numeralia_2 .NumText').text('Doce productos, uno mensual, por 1 año $60,000 MXN');

	var Elementos = $('<ul />');

	for (var i = 01; i < 13; i++) {

		if(i < 10){

			Elementos.append('<li id="AnualMes-' + i + '" class="BotonTiempo" data-coleccion="AnualColeccion-' + i +'" data-coleccion-text="AnualColeccionText-' + i + '"><i class="fa fa-square-o"></i> ' + 0 + i + '</li>');

		}
		else{

			Elementos.append('<li id="AnualMes-' + i + '" class="BotonTiempo" data-coleccion="AnualColeccion-' + i +'" data-coleccion-text="AnualColeccionText-' + i + '"><i class="fa fa-square-o"></i> ' + i + '</li>');

		}
		
	};

	$('.ContDias').html(Elementos);

	$('#AnualMes-1').css('color', '#00acc1');

	BotonTiempo($('#AnualMes-1'));

	$('.BotonTiempo').click(function(){

		This = $(this);

		BotonTiempo(This);

	});

	$('.Slides').click(function(){

		This = $(this);

		ClickSlides(This);

		if ($('input[name=Item-1]').val() != '' && $('input[name=Item-2]').val() != '' && $('input[name=Item-3]').val() != '' && $('input[name=Item-4]').val() != '' && $('input[name=Item-4]').val() != '' && $('input[name=Item-6]').val() != '' && $('input[name=Item-7]').val() != '' && $('input[name=Item-8]').val() != '' && $('input[name=Item-9]').val() != '' && $('input[name=Item-10]').val() != '' && $('input[name=Item-11]').val() != '' && $('input[name=Item-12]').val() != '') {

			$('#Boton_2').css('display', 'block');

			$('#SeccionConfirma .ContTituloOpcion').css({'border':'0'});

			$('#SeccionConfirma .Titulo_1').css({'font-size':'16px', 'font-weight':'700', 'line-height':'125%', 'text-transform':'uppercase'});

			$('#SeccionConfirma .ContenidoOpcion').css({'max-height':'500px'});

			$('#SeccionConfirma').css({'margin-bottom':'120px'});

			$('html, body').stop().animate({scrollTop:$('#TituloConfirmaMembresia').offset().top}, 'slow');

			$('#Boton_2').click(function(e){

				if($('#FormularioPlan_2 input[name=DiaSemana]').val() == ''){

					e.preventDefault();

					$('.AvisoFaltante').text('Dinos que día quieres recibir tus flores');

				}

				else if($('#FormularioPlan_2 input[name=Horario]').val() == ''){

					e.preventDefault();

					$('.AvisoFaltante').text('En que horario quieres recibir tus flores');

				}

				else if($('#FormularioPlan_2 input[name=AceptoTerminos]').val() == ''){

					e.preventDefault();

					$('.AvisoFaltante').text('Por favor, acepta los términos y condiciones');

				}

			});

		};

	});

}

function BotonTiempo(This){		

		ThisColeccion = This.attr('data-coleccion');

		ThisColeccionText = This.attr('data-coleccion-text');

		$('.SlidesCarrusel, .SlidesCarruselText').removeClass('ActivoCarrusel').addClass('InactivoCarrusel');

		$('#' + ThisColeccion + ', #' + ThisColeccionText).toggleClass('InactivoCarrusel ActivoCarrusel');

		$('.BotonTiempo').css('color','#000');

		This.css('color', '#00acc1');

		IniciarCarrusel(ThisColeccion, ThisColeccionText);

}

function ClickSlides(This){

		ThisId = This.attr('id');

		ThisBoton = This.attr('data-boton-tiempo');	

		ThisItem = This.attr('data-input');

		ThisParent = This.attr('data-parent');

		$('#' + ThisParent + ' img').removeClass('BordeAzul').addClass('BordeGris');		

		$('#' + ThisId + ' img').toggleClass('BordeAzul BordeGris');

		$('#' + ThisBoton + ' i').removeClass('fa-square-o').addClass('fa-check-square');

		$('input[name='+ ThisItem + ']').val(ThisId);

}

function TipoPlan(This){

	DataPlan = This.attr('data-plan');

	$('.NumSelect i').removeClass('fa-check-square').addClass('fa-square-o');

	This.children('.NumSelect').children('i').toggleClass('fa-square-o fa-check-square');

	$('input[name=Plan]').val(DataPlan);

	$('html, body').stop().animate({scrollTop:$('#TituloEscogeFlores').offset().top}, 'slow');

	if (DataPlan == 'Mensual') {

		Mensual();

	}
	else{

		Anual();

	};

}

$(document).ready(function(){

	Ventana.resize(ResizeCarrusel).trigger('resize');

	$('#SeccionMembresia').click(function(){

		$('#SeccionMembresia .ContTituloOpcion').css({'border':'0'});

		$('#SeccionMembresia .Titulo_1').css({'font-size':'16px', 'font-weight':'700', 'line-height':'125%', 'text-transform':'uppercase'});

		$('#SeccionMembresia .ContenidoOpcion').css({'max-height':'250px'});

		$('#SeccionMembresia').css({'margin-bottom':'120px'});

		$('html, body').stop().animate({scrollTop:$('#SeccionFlores').offset().top}, 'slow');

	});

	$('.Numeralia').click(function(){

		$('input').val('');

		$('#Boton_1, #Boton_2').css({'display':'none'});

		This = $(this);	

		TipoPlan(This);

		$('#SeccionFlores .ContTituloOpcion').css({'border':'0'});

		$('#SeccionFlores .Titulo_1').css({'font-size':'16px', 'font-weight':'700', 'line-height':'125%', 'text-transform':'uppercase'});

		$('#SeccionFlores .ContenidoOpcion').css({'max-height':'500px'});

		$('#SeccionFlores').css({'margin-bottom':'120px'});

	});

	$('.CheckTerminos').click(function(){

		$('.CheckTerminos i').toggleClass('fa-square-o fa-check-square');

		if ($('input[name=AceptoTerminos]').val() != '') {

			$('input[name=AceptoTerminos]').val('');

		}
		else{

			$('input[name=AceptoTerminos]').val('Acepto');

		};

	});

	$('select[name=DiaEntrega]').change(function(){

		$('input[name=DiaSemana]').val($(this).val());
	});

	$('select[name=HorarioEntrega]').change(function(){

		$('input[name=Horario]').val($(this).val());
	});
    
});