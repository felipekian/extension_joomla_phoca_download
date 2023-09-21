"use strict"



document.addEventListener("keydown", function (event) {
  /************************* 
    Botão new
  *************************/
  if (event.altKey && (event.key === 'n' || event.key === 'N')) {
    document.querySelector('#toolbar-new > button').click();
  }

  /************************* 
    Botão multiple add
  *************************/
  if (event.altKey && (event.key === 'm' || event.key === 'M')) {
    document.querySelector('#toolbar-multiple > button').click();
  }
});
