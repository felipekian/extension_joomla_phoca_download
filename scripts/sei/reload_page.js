"use strict"

let SECONDS = 120;

setTimeout(() => {
  
  setMessageReloadPage();  
  location.reload();
  
}, 1000 * SECONDS);


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