"use strict"

window.addEventListener('load', () => {
  
  window.addEventListener("keydown", function (event) {
    if (event.altKey && (event.key === 'c' || event.key === 'C')) {
      let select_setor = document.querySelector('#selGrupoAcompanhamento');
      let option_csl = document.querySelector('#selGrupoAcompanhamento > option:nth-child(17)');

      if (!option_csl.selected) {
        option_csl.selected = true;
        select_setor.style.border = '2px solid green';
      }
    }
  });

<<<<<<< HEAD
window.addEventListener('load', () => {

=======
>>>>>>> e0ead41d7e1a33bcd4ed1c591dcb13b59a29d44b
  const label_acompanhamento = document.querySelector('#lblSelGrupoAcompanhamento');
  label_acompanhamento.innerHTML = label_acompanhamento.innerHTML + " \"(Alt + C) para selecionar CSL\"";

});