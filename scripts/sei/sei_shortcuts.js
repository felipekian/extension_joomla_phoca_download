"use strict"

window.addEventListener('load', () => {

  let lnkControleProcessos = document.querySelector('#lnkControleProcessos');
<<<<<<< HEAD
  lnkControleProcessos.title = "Alt + Q";

});

window.addEventListener("keydown", function (event) {
  /************************* 
    clica no botão home
  *************************/
  if (event.altKey && (event.key === 'q' || event.key === 'Q')) {
    lnkControleProcessos.click();
  }

  if (event.altKey && (event.key === 's' || event.key === 'S')) {
    document.querySelector('#page_joomla').click();
  }
=======

  lnkControleProcessos.title = "Alt + Q";

  window.addEventListener("keydown", function (event) {
    /************************* 
      clica no botão home
    *************************/
    if (event.altKey && (event.key === 'q' || event.key === 'Q')) {
      lnkControleProcessos.click();
    }

    if (event.altKey && (event.key === 's' || event.key === 'S')) {
      document.querySelector('#page_joomla').click();
    }
  });

>>>>>>> e0ead41d7e1a33bcd4ed1c591dcb13b59a29d44b
});
