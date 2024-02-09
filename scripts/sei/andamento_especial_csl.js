"use strict"


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


window.addEventListener('load', () => {

  const label_acompanhamento = document.querySelector('#lblSelGrupoAcompanhamento');
  label_acompanhamento.innerHTML = label_acompanhamento.innerHTML + " \"(Alt + C) para selecionar CSL\"";

});