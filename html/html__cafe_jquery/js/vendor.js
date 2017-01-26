$(document).ready(function () {
		/*----------Efecto menu-------*/
	$('.menu a').each(function(index,elemento){
		$(this).css({
			'top':'-200px'
		});

		$(this).animate({
			top:'0'
		},2000+(index*500))
	});

		/*----------Efecto Hedaer------*/
	if($(window).width()>800){
		$('header .textos').css({
			opacity:0,
			marginTop:0
		});

		$('header .textos').animate({
			opacity:1,
			marginTop:-52
		},1500);
	}

		/*---------scroll menu--------*/
	var acercaDe= $('#acercaDe').offset().top,
	menu= $('#menu').offset().top,
	galeria= $('#galeria').offset().top,
	ubicacion= $('#ubicacion').offset().top;

	$('#btn-AcercaDe').on('click',function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop:acercaDe
		},500);
	});

	$('#btn-Menu').on('click',function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop:menu
		},500);
	});

	$('#btn-Galeria').on('click',function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop:galeria
		},500);
	});

	$('#btn-Ubicacion').on('click',function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop:ubicacion
		},500);
	});

	
});