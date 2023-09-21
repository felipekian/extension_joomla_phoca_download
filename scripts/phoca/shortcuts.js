"use strict"

document.addEventListener("keydown", function (event) {
  /************************* 
    Salvar e Sair
  *************************/
  if (event.altKey && (event.key === 's' || event.key === 'S')) {
    document.querySelector('#toolbar-save > button').click();
  }

  /************************* 
    Cancelar
  *************************/
  if (event.altKey && (event.key === 'c' || event.key === 'C')) {
    document.querySelector('#toolbar-cancel > button').click();
  }
});
