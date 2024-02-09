"use strict"


/***********************************************
  Adicionar descrição
***********************************************/
function adicionar_descricao() {

  let descricao = window.prompt('Descrição:');

  if (!descricao) {
    localStorage.setItem('textarea_description', ' ');
    localStorage.setItem('textarea_description_date', getDateNow());
    return;
  }

  localStorage.setItem('textarea_description', descricao);
  localStorage.setItem('textarea_description_date', getDateNow());

  location.reload();
}


/***********************************************
  Remover descrição
***********************************************/
function remover_descricao() {
  localStorage.setItem('textarea_description', '');

  location.reload();
}


/************************************************ 
  Popular descricao na página
************************************************/
function setDescriptionAutomaticIfExists() {

  if (localStorage.getItem('textarea_description').length === 0) {
    adicionar_descricao();
  }

  document.querySelector('#jform_description').textContent = localStorage.getItem('textarea_description');

}



/***********************************************
 * Configuração de atalhos
***********************************************/
document.addEventListener("keydown", function (event) {
  /* 
    Adicionar descricao
  */
  if (event.ctrlKey && event.altKey && (event.key === 'd' || event.key === 'D')) {

    adicionar_descricao();

  }

  /* 
    Remover descricao
  */
  if (event.ctrlKey && event.altKey && (event.key === 'r' || event.key === 'R')) {

    if (!confirm('Confirme para remover descrição:')) return;

    remover_descricao();

  }
});


window.addEventListener('load', () => {

  /***********************************************
    Verifica a data atual e a salva no localstorage são diferentes para limpar a descrição
  ***********************************************/

  if (getDateNow() != localStorage.getItem('textarea_description_date')) {
    remover_descricao();
  }


  /***********************************************
    Seta a descricao no campo
  ***********************************************/
  setDescriptionAutomaticIfExists();



  /********************************************** 
    Botoes de controle das funções de adicionar e remover descrição
  **********************************************/
  let botao_descricao_adicionar = document.createElement('button');
  botao_descricao_adicionar.innerHTML = 'Adicionar';
  botao_descricao_adicionar.title = "Adicionar descrição automatica (Ctrl + Alt + D)";
  botao_descricao_adicionar.classList.add('btn');
  botao_descricao_adicionar.classList.add('btn-small');
  botao_descricao_adicionar.addEventListener('click', () => {
    adicionar_descricao();
  });

  let botao_descricao_remover = document.createElement('button');
  botao_descricao_remover.innerHTML = 'Remover';
  botao_descricao_remover.classList.add('btn');
  botao_descricao_remover.classList.add('btn-small');
  botao_descricao_remover.title = 'Remover descrição automatica (Ctrl + Alt + R)';
  botao_descricao_remover.addEventListener('click', () => {
    remover_descricao();
  });

  document.querySelector('#toolbar-cancel').append(botao_descricao_adicionar);
  document.querySelector('#toolbar-cancel').append(botao_descricao_remover);
  
});