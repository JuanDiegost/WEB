function getNumber (id) {
	return parseFloat(document.getElementById(id).value);
}

function suma(){
	var resultado=getNumber('numero1')+getNumber('numero2');
	document.getElementById('resultado').value=resultado;
}