$(document).ready(
	function() {
		$('.menu-gatillo').click(function() {
			$('nav').slideToggle();
		});

		$('#ice-trigger-open').click(function(){ 
			$('#sidr-mobile').show();
			$('#sidr-mobile').css('left', '0px');
			$('body').css('left', '200px');
			$('body').css('position', 'fixed');
			$(this).hide();
			$('#ice-trigger-close').show();
			console.log('Trigger OPEN');
		});

		$('#ice-trigger-close').click(function(){ 
			$('#sidr-mobile').hide();
			$('#sidr-mobile').css('left', '-200px');
			$('body').css('left', '0px');
			$('body').css('position', 'relative');
			console.log('Trigger CLOSE');
			$(this).hide();
			$('#ice-trigger-open').show();
		});

		$('#img-products-carousel').carousel('pause');

		// handles the carousel thumbnails
		$('[id^=carousel-selector-]').click( function(){
		  var id_selector = $(this).attr("id");
		  //var id = id_selector.substr(id_selector.length -1);
		  //fix more 9 items bootstrap
		  var id = id_selector.substr(id_selector.lastIndexOf("-")+1);
		  id = parseInt(id);
		  $('#img-products-carousel').carousel(id);
		  $('[id^=carousel-selector-]').removeClass('selected');
		  $(this).addClass('selected');
		});

		// when the carousel slides, auto update
		$('#img-products-carousel').on('slid', function (e) {
		  var id = $('.item.active').data('slide-number');
		  id = parseInt(id);
		  $('[id^=carousel-selector-]').removeClass('selected');
		  $('[id=carousel-selector-'+id+']').addClass('selected');
		});
	});

$(window).load(function () {
	var visited = $.cookie('visited');
	if (visited == 'yes') {
		console.log('OFF!');
		return false; // second page load, cookie active
	} else {
		console.log('ON!');
		setTimeout(function(){
			$.modalPop();
		}, 1500);
	}

	$.cookie('visited', 'yes', {
		expires: 30 // the number of days cookie  will be effective
	});

	$.modalPop = function(){
		$('#modal-pop').fadeIn();
		$('#wrapper-sidr-mobile').addClass('blur-body');
		$('#close-modal').click(function(){
			 $('#modal-pop').hide();
			 $('#wrapper-sidr-mobile').removeClass('blur-body');
		});
		console.log('Modal ON');
		return false;
	}
	
});