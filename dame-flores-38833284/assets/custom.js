/*

Envy by WeTheme (http://www.wetheme.com)
Custom JS

Last Update:
2nd December 2014
- Added Sidr code

*/

// FlexSlider

$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		directionNav: true,
		controlNav: false,
		controlsContainer: ".flexslider-container",
		animationLoop: false
  });
});

// Mobile Browser Menu

$("select#mobile-menu").change(function() {
  window.location = $(this).find("option:selected").val();
});

// Zoom!

$(document).ready(function(){
  //$('.featured-image-div').zoom();
  //$('a.image-swap').click(function() {
  //  var newImage = $(this).attr('href');
  //  $( '.featured-image-div img' ).attr({ src: newImage });
  //  return false;
  //});

});

// FancyBox

$(document).ready(function() {
	$(".fancybox").fancybox();
});

$(document).ready(function() {
	$(".fancybox-instagram").fancybox({
		padding : 0
	});
});


// Sidr

function sumarAnchoHeader(){
	$("#site-header").css('width', '100%');
}
function restarAnchoHeader(){
	$('#site-header').width( $("#site-header").width() );
}

$(document).ready(function() {
	$('.slide-menu').sidr({
		side: 'right'
	});
});

/* $(window).touchwipe({
   wipeLeft: function() {
     // Close
     $.sidr('close', 'sidr-mobile');
   },
   wipeRight: function() {
     // Open
     $.sidr('open', 'sidr-mobile');
   },
   preventDefaultEvents: false
 });*/

$('#responsive-menu-button').sidr({
	name: 'sidr-mobile',
    onOpen: restarAnchoHeader,
    onClose: sumarAnchoHeader
});

$('#conocenos-menu-button').sidr({
	name: 'sidr-conocenos'
});

$('#responsive-filter-button').sidr({
	name: 'sidr-filter'
});


// Select or Die


