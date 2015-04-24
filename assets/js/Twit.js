function Twit(titulo, desc){
	this.titulo = titulo;
	this.desc = desc;
}

Twit.twits =[];

Twit.aceptar = function(e){
	/*
	obtener titulo descripcion 
	agregar valores a arreglo
	*/
	e.preventDefault();
	var titulo = document.getElementById('titulo').value;
	var desc = document.getElementById('desc').value;
	var twit = new Twit(titulo, desc);
	Twit.twits.push(twit);
	Twit.cancelar(e);
	Twit.mostrar();
}

Twit.cancelar = function(e){
	e.preventDefault(); // previene comportamiento por defecto del formulario
	var titulo = document.getElementById('titulo');
	var desc = document.getElementById('desc');
	titulo.value = '';
	desc.value ='';
}

Twit.mostrar = function(){
	var comentarios = '';
	Twit.twits.map(function(elemento, indice){
		comentarios = comentarios + '<article>'
					+'<h2>' + elemento.titulo + '</h2><p>' 
					+ elemento.desc + '</p></article>';	 
	});

	document.getElementById('comentarios').innerHTML = comentarios;

}

Twit.guardar = function(){
	var twits = Twit.twits;
	var twitsEncode = JSON.stringify(twits);
	localStorage.setItem('twits', twitsEncode);
}


/*<article>
	<h2>Título</h2>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
</article>*/


