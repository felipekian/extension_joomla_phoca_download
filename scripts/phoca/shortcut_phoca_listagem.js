"use strict"

window.addEventListener('load', () => {

  document.addEventListener("keydown", function (event) {
    /************************* 
      Botão new
    *************************/
    if (event.altKey && (event.key === 'n' || event.key === 'N')) {
      document.querySelector('#toolbar-new > button').click();
    }

<<<<<<< HEAD

window.addEventListener('load', () => {
=======
    /************************* 
      Botão multiple add
    *************************/
    if (event.altKey && (event.key === 'm' || event.key === 'M')) {
      document.querySelector('#toolbar-multiple > button').click();
    }
  });
>>>>>>> e0ead41d7e1a33bcd4ed1c591dcb13b59a29d44b

  /* 
    Add titulo do elemento com o atalho
  */
  document.querySelector('#toolbar-new > button').title = "(Ctrl + Alt + N)";
  document.querySelector('#toolbar-multiple > button').title = "(Ctrl + Alt + M)";

});