"use strict"

window.addEventListener('load', () => {

  if(!document.querySelector('#lang > option:nth-child(3)')) return;

  document.querySelector('#lang > option:nth-child(3)').selected = true;
  document.querySelector('#lang_chzn > a > span').innerHTML = 'Português do Brasil (pt-BR)';

});