"use strict"

document.querySelector('#lnkControleProcessos').title="Alt + Q";

document.addEventListener("keydown", function (event) {
  /************************* 
    clica no botão home
  *************************/
  if (event.altKey && (event.key === 'q' || event.key === 'Q')) {
    document.querySelector('#lnkControleProcessos').click();
  }
});
