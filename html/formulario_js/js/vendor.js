(function  () {
	var formulario=document.getElementById('formulario'),
	nombre=formulario.nombre,
	correo=formulario.correo,
	sexo=formulario.sexo,
	terminos=formulario.terminos,
	error=document.getElementById('error');

	function validarNombre (e) {
		if(nombre.value == '' || nombre == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el nombre</li>';
			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarCorreo (e) {
		if(correo.value == '' || correo == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el correo</li>';
			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarSexo (e) {
		if (sexo.value=='' || sexo.value == null) {
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor marca tu sexo</li>';
			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarTerminos (e) {
		if (!terminos.checked) {
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor acceta los terminos</li>';
			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarFormulario(e){
		error.innerHTML= '';
		validarNombre(e);
		validarCorreo(e);
		validarSexo(e);
		validarTerminos(e);
	}
	formulario.addEventListener('submit',validarFormulario);
}());