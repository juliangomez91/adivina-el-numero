let randomNumber = Math.floor(Math.random() * 100) + 1;

const tablero = document.querySelector('.tablero');
const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const adivino = document.querySelector('.adivino');
const ultimoNumero = document.querySelector('.ultimoNumero');
const altoBajo = document.querySelector('.altoBajo');

let contador = 1;
let botonReinicio;



function listaDeJuego (){
    const numeroUsuario = Number(guessField.value);
    if (contador === 1){
    adivino.textContent = 'Intentos anteriores: ';
    }

adivino.textContent += numeroUsuario + ' ';

if (numeroUsuario === randomNumber){
    ultimoNumero.textContent = '¡FELICIDADES GANASTE!';
    ultimoNumero.style.backgroundColor ='green';
    altoBajo.textContent = ' ';
    setGameOver();
}  else if(contador === 6){
    ultimoNumero.textContent ='¡¡¡ FIN DEL JUEGO!!!';
    altoBajo.textContent ='';
    setGameOver();
} else {
ultimoNumero.textContent = '!INCORRECTO¡';
ultimoNumero.style.backgroundColor = 'red';
ultimoNumero.style.color ='white';
if(numeroUsuario < randomNumber){
altoBajo.textContent = '¡EL NUMERO ES MUY BAJO!';
} else if (numeroUsuario > randomNumber){
 altoBajo.textContent = '¡EL NUMERO ES MUY GRANDE!';
}
}22

contador++;
guessField.value = '';
guessField.focus();

}

guessSubmit.addEventListener('click', listaDeJuego);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    botonReinicio = document.createElement('button');
    botonReinicio.textContent = 'Iniciar nuevo juego';
    document.body.appendChild(botonReinicio);
    botonReinicio.addEventListener('click', resetGame);
  }

  function resetGame() {
    contador = 1;
  
    const respuestas = document.querySelectorAll('.respuestas');
  for (let i = 0 ; i < respuestas.length ; i++) {
    respuestas[i].textContent = '';
    }
  
    botonReinicio.parentNode.removeChild(botonReinicio);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    ultimoNumero.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
