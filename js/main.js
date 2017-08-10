var lista = document.getElementById('tarea');
var t = [];
function iniciar () {
	var div = document.createElement('div');
	var input = document.createElement('input');
		input.setAttribute('type', 'texto');
		input.setAttribute('id', 'texto');
		input.setAttribute('placeholder', 'Añadir lista...')
	var p= document.createElement('p');
	var button = document.createElement('button');
		button.setAttribute('onclick', 'añadir()');
		button.innerHTML='Guardar';
	var borrar = document.createElement('button');
		borrar.setAttribute('onclick', 'delete()');
		borrar.innerHTML='X';
	p.appendChild(button);
	p.appendChild(borrar);
	div.appendChild(input);
	div.appendChild(p);

	lista.removeAttribute('onclick');
	lista.replaceChild(div, lista.firstChild);
}

function añadir() {
	var titulo = document.getElementById('texto').value;
	console.log(titulo);
	var div = document.createElement('div');
	var h1=document.createElement('h3');
		h1.innerHTML=titulo;
	var p= document.createElement('p');
		p.setAttribute('id', 'agregar');
		p.setAttribute('onclick','tarea(this)');
		p.innerHTML= 'Añadir una tarjeta...';
	div.appendChild(h1);
	div.appendChild(p);
	lista.replaceChild(div, lista.firstChild);
}

function tarea(e){
	var div=document.createElement('div');
	var input = document.createElement('input');
		input.setAttribute('type', 'texto');
		input.setAttribute('id', 'tareas');
	var p= document.createElement('p');
	var button = document.createElement('button');
		button.setAttribute('onclick', 'tareas()');
		button.innerHTML='Guardar';
	var borrar = document.createElement('button');
		borrar.setAttribute('onclick', 'delete()');
		borrar.innerHTML='X';
	p.appendChild(button);
	p.appendChild(borrar);
	div.appendChild(input);
	div.appendChild(p);

	e.removeAttribute('onclick');
	e.replaceChild(div, e.firstChild);
}

function tareas() {
	var texto=document.getElementById('tareas').value;
	t.push(texto);
	var div=document.createElement('div');
	for (var i = 0; i <=t.length; i++) {
		if(t[i]!=undefined){
			var div2=document.createElement('div');
			div2.innerHTML=t[i];
			div.appendChild(div2);
		}
	}
	var p= document.createElement('p');
		p.setAttribute('onclick','tarea(this)');
		p.innerHTML= 'Añadir una tarjeta...';
	div.appendChild(p);

	var d = document.getElementById('agregar');
	d.replaceChild(div, d.firstChild);
}

/*function trello(){

	var ocultarCol = document.getElementsByClassName('borrarCol')[0];
	ocultarCol.classList.toggle('borrar');

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

	var iconocancelar=document.createElement("span");
	iconocancelar.setAttribute("class", "icon-cancel");

	$(document).ready(function(){
		$(".icon-cancel").click(function(){
			$(".borrarCol").toggleClass("borrar");
			$(".guardarLista").remove();
		});
	});

	botonAgregarLista.appendChild(textoBotonUno);
	contenedorGuardarLista.appendChild(textoAgregarLista);
	contenedorGuardarLista.appendChild(botonAgregarLista);
	contenedorGuardarLista.appendChild(iconocancelar);
	todasLasListas.appendChild(contenedorGuardarLista);

	botonAgregarLista.addEventListener('click', function(){
		var divTarea = document.getElementById('contenedorTodo');
		var tituloLista = document.getElementById('textareaLista').value;
		document.getElementById('textareaLista').value = "";

		if(tituloLista == "" || tituloLista == null){
			alert("Debes ingresar el nombre de la lista");
			return;
		}

		var columnaOrden = document.createElement('div');
		columnaOrden.setAttribute('class', 'distancia');

		var tituloFinalLista = document.createElement('p');
		tituloFinalLista.setAttribute('class','name-list estiloTitulo');
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
	});
}
*/