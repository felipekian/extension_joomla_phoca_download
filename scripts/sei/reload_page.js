"use strict"

let SECONDS = 60;
let COUNT = SECONDS;

let ELEMENTO = document.querySelector('#divInfraBarraSuperior > label');
let TEXT = document.querySelector('#divInfraBarraSuperior > label').innerHTML;

setTimeout(() => {  
  setMessageReloadPage();  
  location.reload();  
}, 1000 * SECONDS);


setInterval(() => {
  ELEMENTO.innerHTML = `<span style="color:white;font-wight:bold;">${COUNT--}s</span> :: ${TEXT}`; 
}, 1000);


function setMessageReloadPage() {
  let alerta = document.createElement('div');
  
  alerta.innerHTML = "Recarregando página....";
  alerta.style.border = '1px solid red';
  alerta.style.background = 'red';
  alerta.style.padding = '20px';
  alerta.style.color = 'white';
  alerta.style.fontSize = '18px';

  document.querySelector('#divInfraAreaGlobal').prepend(alerta);
}