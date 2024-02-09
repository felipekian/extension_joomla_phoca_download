"use strict"

window.addEventListener('load', () => {

  document.addEventListener("keydown", function (event) {
    /************************* 
      pagina phoca downloads listagem
    *************************/
    if (event.ctrlKey && event.shiftKey && (event.key === 'k' || event.key === 'K')) {
      window.location = 'https://saude.rr.gov.br/administrator/index.php?option=com_phocadownload&view=phocadownloadfiles';
    }

    /************************* 
      página de cache
    *************************/
    if (event.ctrlKey && event.shiftKey && (event.key === 'l' || event.key === 'L')) {
      window.open("https://saude.rr.gov.br/administrator/index.php?option=com_cache", "_blank");
    }
  });
  
});
