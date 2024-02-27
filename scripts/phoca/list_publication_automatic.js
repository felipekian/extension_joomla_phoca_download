"use strict"
/******************************************** 

  Publicação automatica passando uma lista com
  os valores dos titulos e descrições das
  respectivas publicações  

********************************************/
const CIB_DATA_NAME_LOCAL_STORAGE = 'cib_data';
const CIB_CONTROLLER_STATUS_LOCAL_STORAGE = 'cib_status';
const CIB_STATUS_NOT_PUBLISH = 0;
const CIB_STATUS_PUBLISH = 1;
const CIB_TIME_PUBLISH = 10;

/* 
  Desative publication_automatic quando fizer por aqui
*/
function disablePublicationAutomatic() {
  localStorage.setItem("LAST_PUBLISHER_KEY", "");
}

/* 
  adicionar valores no formato correto no local storage
*/
function cib_set_in_localStorage(data = []) {
  localStorage.setItem(CIB_DATA_NAME_LOCAL_STORAGE, JSON.stringify(data));
}

/* 
  pega os dados do local storage já parciando os dados
*/
function cib_get_data() {
  return JSON.parse(localStorage.getItem(CIB_DATA_NAME_LOCAL_STORAGE));
}

/* 
  contabilizado o tamanho do array
*/
function cib_data_count() {
  let data = cib_get_data();
  return data.length;
}

/* 
  remove o primeiro elemento do array 
*/
function cib_data_shift() {
  if (cib_data_count() === 0) {
    return;
  }

  let data = cib_get_data();
  data.shift();
  cib_set_in_localStorage(data);
}

/* 
  apagar dados no local storage
*/
function cib_remove_all_data() {
  localStorage.setItem(CIB_DATA_NAME_LOCAL_STORAGE, JSON.stringify([]));
  alert('removido...');
}

/* 
  pega o nome do titulo da vez (Fila)
*/
function cib_get_first_title() {
  let data = cib_get_data();
  return data[0].title;
}

/* 
  pega a descrição da vez (Fila)
*/
function cib_get_first_description() {
  let data = cib_get_data();
  return data[0].description;
}


/* 
  salvar status do controller
*/

function cib_set_button_interface() {
  /********************************************** 
  *
  * add botão para adicionar a lista da cib
  * 
  **********************************************/
  let botao_cib_adicionar = document.createElement('button');
  botao_cib_adicionar.innerHTML = 'Lista pub add';
  botao_cib_adicionar.title = "Adicionar lista com títulos e descrições";
  botao_cib_adicionar.classList.add('btn');
  botao_cib_adicionar.classList.add('btn-small');
  botao_cib_adicionar.addEventListener('click', () => {

    cib_get_data_prompt_web();
    cib_controller_set_status_in_local_storage(CIB_STATUS_PUBLISH);

    setTimeout(() => {
      location.reload();
    }, (CIB_TIME_PUBLISH * 1000) / 2);

  });

  let botao_cib_remover = document.createElement('button');
  botao_cib_remover.innerHTML = 'Lista pub rem';
  botao_cib_remover.classList.add('btn');
  botao_cib_remover.classList.add('btn-small');
  botao_cib_remover.title = 'Remover lista de publicações';
  botao_cib_remover.addEventListener('click', () => {

    cib_remove_all_data();
    cib_controller_set_status_in_local_storage(CIB_STATUS_NOT_PUBLISH);
    location.reload();

  });

  document.querySelector('#toolbar-cancel').append(botao_cib_adicionar);
  document.querySelector('#toolbar-cancel').append(botao_cib_remover);
}


function cib_controller_set_status_in_local_storage(status) {
  localStorage.setItem(CIB_CONTROLLER_STATUS_LOCAL_STORAGE, status);
}

function cib_controller_get_status_in_local_storage() {
  return parseInt(localStorage.getItem(CIB_CONTROLLER_STATUS_LOCAL_STORAGE));
}

function cib_get_data_prompt_web() {

  let dados = prompt('Informe os dados cib: ');

  if (!dados) return;

  dados = dados.replace(/\r/g, '');
  dados = dados.split('\n');

  dados = dados.filter(function (i) {
    return i;
  });


  /**
   * Pula de 2 em dois para contabilizar title e description sequencial  
   **/
  let dados_tratados = [];

  for (let i = 0; i < dados.length; i += 2) {
    dados_tratados.push({
      'title': dados[i],
      'description': dados[i + 1]
    })
  }

  /* 
   * add dados tratados no local storage 
   */
  cib_set_in_localStorage(dados_tratados);

}

function cib_controll_publish() {

  if (cib_controller_get_status_in_local_storage() === CIB_STATUS_NOT_PUBLISH)
    return;

  if (cib_data_count() === 0) {
    cib_controller_set_status_in_local_storage(CIB_STATUS_NOT_PUBLISH);
    return;
  }

  /* seta o titulo e a descrição */
  let input_title = document.querySelector('#jform_title');
  let input_decription = document.querySelector('#jform_description');
  let btn_salvar_e_novo = document.querySelector('#toolbar-new > button');

  input_title.focus();
  input_title.value = cib_get_first_title();
  input_decription.textContent = cib_get_first_description();

  /* 
    remove os dados do local storage referente ao publicado shift do array 
  */
  cib_data_shift();


  setTimeout(() => {
    input_title.blur();
  }, 1500);

  setTimeout(() => {
    disablePublicationAutomatic();
    btn_salvar_e_novo.click();
  }, CIB_TIME_PUBLISH * 1000);
}


/* 

  MAIN

*/

window.addEventListener('load', () => {

  cib_set_button_interface();

  cib_controll_publish();

});