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

/* 
  Add titulo do elemento com o atalho
*/
document.querySelector('#toolbar-save > button').title = "(Alt + S)";
document.querySelector('#toolbar-cancel > button').title = "(Alt + C)"