(function(){
	var API_WEATHER_KEY="80114c7878f599621184a687fc500a12";
	var API_WEATHER_URL="http://api.openweathermap.org/data/2.5/weather?APPID="+API_WEATHER_KEY+"&";
	var API_IMAGE_WEATHER="http://openweathermap.org/img/w/"
	var cityWeather={};

	var $body=$("body");
	var $loader=$(".loader");
	var nameNewCity=$("[data-input='cityAdd']");
	var btnAdd=$("[data-btn='add']");
	var today=new Date();
	var timeNow=today.toLocaleTimeString();

	cityWeather.zone;
	cityWeather.icon;
	cityWeather.temp;
	cityWeather.temp_max;
	cityWeather.temp_min;
	cityWeather.main;

	$(btnAdd).on("click",addNewCity);

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getCoords,errorFound);

	}else{
		alert("Por favor actualiza tu navegador")
	}

	function errorFound(error){
		switch(error.code){
			case 0:
				alert("Error desconocido.");
			break;
			case 1:
				alert("Permiso denegado.");
			break;
			case 2:
				alert("Tu posición no está disponible.")
			break;
			case 3:
				alert("Timeout");
			break;
			default:
			break;
		}
	};

	function getCoords(position){
		var lat=position.coords.latitude;
		var lon=position.coords.longitude;
		$.getJSON(API_WEATHER_URL+"lat="+lat+"&lon="+lon, getCurrentWeather);
	};

	function getCurrentWeather(data){
		cityWeather.zone=data.name;
		cityWeather.icon=API_IMAGE_WEATHER+data.weather[0].icon+".png";
		cityWeather.temp=data.main.temp-273.15;
		cityWeather.temp_max=data.main.temp_max-273.15;
		cityWeather.temp_min=data.main.temp_min-273.15;
		cityWeather.main=data.weather[0].main;
		renderTemplate(cityWeather);

	};

	function activateTemplate(id){
		var t=document.querySelector(id);
		return document.importNode(t.content,true);
	};

	function renderTemplate(cityWeather){
		var clone=activateTemplate("#template--city");
		clone.querySelector("[data-time]").innerHTML=timeNow;
		clone.querySelector("[data-city]").innerHTML=cityWeather.zone;
		clone.querySelector("[data-icon]").src=cityWeather.icon;
		clone.querySelector("[data-temp='max']").innerHTML=cityWeather.temp_max.toFixed(1);
		clone.querySelector("[data-temp='min']").innerHTML=cityWeather.temp_min.toFixed(1);
		clone.querySelector("[data-temp='current']").innerHTML=cityWeather.temp.toFixed(1);
		
		$($loader).hide();
		$( $body ).append(clone);

	}

	function addNewCity(e){
		event.preventDefault();
		$.getJSON(API_WEATHER_URL+"q="+$(nameNewCity).val(),getWeatherNewCity);
	}

	function getWeatherNewCity(data){
		cityWeather={};
		cityWeather.zone=data.name;
		cityWeather.icon=API_IMAGE_WEATHER+data.weather[0].icon+".png";
		cityWeather.temp=data.main.temp-273.15;
		cityWeather.temp_max=data.main.temp_max-273.15;
		cityWeather.temp_min=data.main.temp_min-273.15;
		cityWeather.main=data.weather[0].main;
		renderTemplate(cityWeather);
	}

})();