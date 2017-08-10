var agregarTareas = document.getElementById('botonPrimero');
agregarTareas.onclick = function trello() {

	//Para que oculte el primer boton de agregar Lista 
	var ocultarBoton = document.getElementsByClassName('borrarBtn')[0];
	ocultarBoton.classList.toggle('borrar');

	var contenedorGuardarLista = document.createElement('div');
	contenedorGuardarLista.setAttribute('class', 'guardarLista');

	var textoAgregarLista=document.createElement("input");
	textoAgregarLista.setAttribute("id", "textareaLista");
	textoAgregarLista.setAttribute("type", "text");
	textoAgregarLista.setAttribute("class", "form-control");
	textoAgregarLista.setAttribute("placeholder", "Añadir una lista...");

	var botonAgregarLista = document.createElement("button");
	botonAgregarLista.setAttribute("class", "botonLista");
	var textoBotonUno= document.createTextNode("Guardar");

	var cancelar=document.createElement("button");
	cancelar.setAttribute("class", "delete");
	cancelar.innerHTML = "X";

	contenedorGuardarLista.addEventListener("click", function(){
		cancelar.click(function(){
			borrarBtn.toggleClass("borrar");
			guardarLista.remove();
		});
	});

	botonAgregarLista.appendChild(textoBotonUno);
	contenedorGuardarLista.appendChild(textoAgregarLista);
	contenedorGuardarLista.appendChild(botonAgregarLista);
	contenedorGuardarLista.appendChild(cancelar);
	todasLasListas.appendChild(contenedorGuardarLista);

	botonAgregarLista.addEventListener('click', function(){
		var divTarea = document.getElementById('contenedorTodo');
		var tituloLista = document.getElementById('textareaLista').value;
		document.getElementById('textareaLista').value = "";

		if(tituloLista == "" || tituloLista == null){
			alert("Debes ingresar el nombre de la lista :3");
			return; 
		}
		
		var columnaOrden = document.createElement('div');
		columnaOrden.setAttribute('class', 'contenedorTarjeta');

		var tituloFinalLista = document.createElement('p');
		tituloFinalLista.setAttribute('class','estiloTitulo');
		var textTarea = document.createTextNode(tituloLista);

		var botonAñadirTarjeta = document.createElement('button');
		botonAñadirTarjeta.setAttribute("class", "botonTarjeta");
		var textoBotonTarjeta = document.createTextNode("Añadir Tarjeta");

		divTarea.appendChild(columnaOrden);
		columnaOrden.appendChild(tituloFinalLista);
		tituloFinalLista.appendChild(textTarea);
		columnaOrden.appendChild(botonAñadirTarjeta);
		botonAñadirTarjeta.appendChild(textoBotonTarjeta);

   		botonAñadirTarjeta.addEventListener('click', function(){
		   	var textTarjetas=document.createElement("input");
			textTarjetas.setAttribute("class", "form-control textareaAñadirTarjeta");
			textTarjetas.setAttribute("type", "text");
			tituloFinalLista.appendChild(textTarjetas);
   		});

   		botonAgregarLista .addEventListener("click", function(event) {
	if (event.target && event.target.className == "delete") {
    event.target.parentNode.remove();
  }
});
	});

	

}