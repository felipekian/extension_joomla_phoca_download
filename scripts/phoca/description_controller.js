"use strict"

document.addEventListener("keydown", function (event) {
  /* 
    Adicionar descricao
  */
  if (event.ctrlKey && event.altKey && (event.key === 'd' || event.key === 'D')) {

    let descricao = window.prompt('Descrição:');

    if (!descricao) return;

    localStorage.setItem('textarea_description', descricao);

    location.reload();
  }

  /* 
    Remover descricao
  */
  if (event.ctrlKey && event.altKey && (event.key === 'r' || event.key === 'R')) {

    if (!confirm('Confirme para remover descrição:')) return;

    localStorage.setItem('textarea_description', '');

    location.reload();
  }
});

/* 
  Popular descricao na página
*/
function setDescriptionAutomaticIfExists() {

  if (!localStorage.getItem('textarea_description')) return;
  if (localStorage.getItem('textarea_description') == '') return;
  if (localStorage.getItem('textarea_description').length < 1) return;

  alert(localStorage.getItem('textarea_description').length);
  document.querySelector('#jform_description').innerHTML = localStorage.getItem('textarea_description');

}

setDescriptionAutomaticIfExists();

/* 
  Botoes de controle das funções
*/
let botao_descricao_adicionar = document.createElement('button');
botao_descricao_adicionar.innerHTML = 'Adicionar';
botao_descricao_adicionar.title="Adicionar descrição automatica";
botao_descricao_adicionar.classList.add('btn');
botao_descricao_adicionar.classList.add('btn-small');
botao_descricao_adicionar.addEventListener('click', ()=>{
  alert('ok adicionar')
});

let botao_descricao_remover = document.createElement('button');
botao_descricao_remover.innerHTML = 'Remover';
botao_descricao_remover.classList.add('btn');
botao_descricao_remover.classList.add('btn-small');
botao_descricao_remover.title = 'Remover descrição automatica';
botao_descricao_remover.addEventListener('click', ()=>{
  alert('ok remover')
});

document.querySelector('#toolbar-cancel').append(botao_descricao_adicionar);
document.querySelector('#toolbar-cancel').append(botao_descricao_remover);