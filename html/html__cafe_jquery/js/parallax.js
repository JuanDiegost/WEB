$(document).ready(function(){
	$(window).scroll(function(){
		var width=$(window).width();

		if (width>800) {
			var scroll=$(window).scrollTop();

			$('header .textos').css({
				'transform':'translate(0px, ' + scroll/2+'%)'
			});

			$('.acercaDe article').css({
				'transform':'translate(0px, -' + scroll/4+'%)'
			});
		};
	});

	$(window).resize(function(){
		var width=$(window).width();
		if (width<800) {
			$('.acercaDe article').css({
				'transform':'translate(0px, 0px)'
			});
		};
	});
});