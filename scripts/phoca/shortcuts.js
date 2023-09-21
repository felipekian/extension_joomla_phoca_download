"use strict"

/************************* 
Salvar e Sair
*************************/

document.addEventListener("keydown", function(event) {
  if (event.altKey && (event.key === 's' || event.key === 'S'))
  {
      document.querySelector('#toolbar-save > button').click();        
      event.preventDefault();
  }
});


/************************* 
Cancelar
*************************/

document.addEventListener("keydown", function(event) {
  if (event.altKey && (event.key === 'c' || event.key === 'C'))
  {
      document.querySelector('#toolbar-cancel > button').click();        
      event.preventDefault();
  }
});