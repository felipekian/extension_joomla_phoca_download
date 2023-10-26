"use strict"

let SECONDS = 60;
let COUNT = SECONDS;

let ELEMENTO = document.querySelector('#divInfraBarraSuperior > label');
let TEXT = document.querySelector('#divInfraBarraSuperior > label').innerHTML;
let URL_ATUAL = window.location.href;
let RELOAD_ACTIVE_PAGE = URL_ATUAL.indexOf('https://sei.rr.gov.br/sei/controlador.php?acao=procedimento_controlar') !== -1;

if(RELOAD_ACTIVE_PAGE){
  setTimeout(() => {  
    setMessageReloadPage();  
    location.reload();  
  }, 1000 * SECONDS - 5);
}


setInterval(() => {
  let data_insert = `<a 
  title="Abrir site da sesau" 
  href="https://saude.rr.gov.br/administrator/index.php?option=com_phocadownload&view=phocadownloadfiles" 
  target="_blank">
  <span style="color:white;font-wight:bold;">`;

  if(RELOAD_ACTIVE_PAGE)
    data_insert += `${COUNT}s :: ${TEXT} :: ${getHoras()} horas e ${getMinutos()} minutos</span></a>`; 
  else
    data_insert += `${TEXT} :: ${getHoras()} horas e ${getMinutos()} minutos</span></a>`; 

  ELEMENTO.innerHTML = data_insert;
  
  if(--COUNT && COUNT < 0) COUNT = 0; 
}, 1000);


function setMessageReloadPage() {
  document.querySelector('#divInfraBarraSuperior').style.borderBottom = "2px solid red";
}

function getHoras() {
  return formatValue((new Date()).getHours());
}

function getMinutos() {
  return formatValue((new Date()).getUTCMinutes());  
}

function formatValue(value) {
  if(value < 10){
    return `0${value}`;
  }
  return value;
}