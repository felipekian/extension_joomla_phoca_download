"use strict"

window.addEventListener('load', () => {

  document.addEventListener("keydown", function (event) {
    /************************* 
      Salvar e Sair
    *************************/
    if (event.altKey && (event.key === 's' || event.key === 'S')) {
      window.open('https://saude.rr.gov.br/administrator/index.php?option=com_cache', '_blank'); // abre a pagina de limpar o cache
      document.querySelector('#toolbar-save > button').click();
    }

<<<<<<< HEAD
window.addEventListener('load', () => {
=======
    /************************* 
      Cancelar
    *************************/
    if (event.altKey && (event.key === 'c' || event.key === 'C')) {
      document.querySelector('#toolbar-cancel > button').click();
    }
  });
>>>>>>> e0ead41d7e1a33bcd4ed1c591dcb13b59a29d44b

  /* 
    Add titulo do elemento com o atalho
  */
  document.querySelector('#toolbar-save > button').title = "(Alt + S)";
  document.querySelector('#toolbar-cancel > button').title = "(Alt + C)";

});