(function  () {
	var video=document.getElementById('video'),
	btn=document.getElementById('btn-play'),
	tiempo=document.getElementById('tiempo'),
	volumen=document.getElementById('volumen'),intervalo,
	btnFullScream=document.getElementById('full-scream');

	video.play();
	intervalo=setInterval(barraTiempo,1000);
	btn.addEventListener('click',function(){
		if(btn.innerHTML=='play'){
			btn.innerHTML='pause';
			video.play();
		}else{
			btn.innerHTML= 'play';
			video.pause();
		}
	});

	btnFullScream.addEventListener('click',function () {
		try{video.webkitEnterFullScreen();}
		catch(e){video.mozRequestFullScreen();}
		
	});

	tiempo.addEventListener('change',function () {
		video.currentTime=tiempo.value;
		barraTiempo();
	});

	volumen.addEventListener('change',function(){
		video.volume=volumen.value;
	});

	function barraTiempo () {
		addTimeMax(video.duration);
		tiempo.value=video.currentTime;
	}

	function addTimeMax (time) {
		tiempo.setAttribute('max',time);
	}

}());