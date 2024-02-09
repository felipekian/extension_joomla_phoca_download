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


window.addEventListener('load', () => {
  /* 
    Add titulo do elemento com o atalho
  */
  document.querySelector('#toolbar-new > button').title = "(Ctrl + Alt + N)";
  document.querySelector('#toolbar-multiple > button').title = "(Ctrl + Alt + M)";

});