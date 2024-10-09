let partida = false;
let jugadores = 1;
function deidadVisible(){
    var checkbox = document.getElementById('deidadCheck').checked;
    var deidad = document.getElementById('deidad');
    if(checkbox){
        deidad.style.display = 'block';
    }
    else{
        deidad.style.display = 'none';
    }
}
function tiempoVisible(){
    var checkbox = document.getElementById('tiempoCheck').checked;
    var tiempo = document.getElementById('tiempo');
    if(checkbox){
        tiempo.style.display = 'block';
    }
    else{
        tiempo.style.display = 'none';
    }
}
function vida(boton, valor, deidad){
    var vida = document.getElementById(boton);
    var vidaActual = parseInt(vida.innerHTML);
    if(valor && partida && (deidad || vidaActual < 20)){

        vidaActual += 1;
    }
    else if(!valor && partida && vidaActual >= 1){
        vidaActual -= 1;
        if(vidaActual == 0){
            var diez = document.getElementById("diez"+boton.charAt(4));
            diez.style.display = 'block';
        }
    }

    vida.innerHTML = vidaActual;

}
function jugadoresVisibles(cantJugadores){
    if(cantJugadores >= 1 ){
        document.getElementById('jugador1').style.display = 'block';

    }
    if(cantJugadores >= 2 ){
        document.getElementById('jugador2').style.display = 'block';
    }
    else{
        document.getElementById('jugador2').style.display = 'none';
    }
    if(cantJugadores >= 3 ){
        document.getElementById('jugador3').style.display = 'block';
    }
    else{
        document.getElementById('jugador3').style.display = 'none';
    }
    if(cantJugadores >= 4 ){
        document.getElementById('jugador4').style.display = 'block';
    }
    else{
        document.getElementById('jugador4').style.display = 'none';
    }
    if(cantJugadores >= 5 ){
        document.getElementById('jugador5').style.display = 'block';
    }
    else{
        document.getElementById('jugador5').style.display = 'none';
    }
    if(cantJugadores == 6 ){
        document.getElementById('jugador6').style.display = 'block';
    }
    else{
        document.getElementById('jugador6').style.display = 'none';
    }
    jugadores = cantJugadores;
}

function diez(jugador,id){
    document.getElementById(jugador).innerHTML = 10;
    document.getElementById(id).style.display = 'none';
}

function deidadCalculo(jugadores){
    var vida = document.getElementById('deidadVida');
    vida.innerHTML = jugadores * 30;

}

function iniciar() {
    if(jugadores == 1 && !document.getElementById('deidadCheck').checked){
        alert('Debe seleccionar más de un jugador o activar la deidad');
        return;
    }
    else{
        partida = true;
        const elementos=document.getElementsByClassName('opciones');
        for (let i = 0; i < elementos.length; i++) {
            elementos[i].style.display = 'none';
        }
        iniciarReloj(40 * 60);
        document.getElementById("terminarButton").style.display = 'block';
    }	

}
function terminar() {	
    partida = false;
    const elementos=document.getElementsByClassName('opciones');
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.display = 'block';
    }
    document.getElementById("terminarButton").style.display = 'none';
}


function iniciarReloj(duracion) {
    let tiempoRestante = duracion;
    const display = document.getElementById('tiempoRestante');
    
    const interval = setInterval(() => {
        const minutos = Math.floor(tiempoRestante / 60);
        const segundos = tiempoRestante % 60;
        display.textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
        
        if (tiempoRestante <= 0) {
            clearInterval(interval);
            alert('¡El tiempo ha terminado!');
        }
        
        tiempoRestante--;
    }, 1000);
}