"use strict"
/******************************************** 

  Publicação automatica passando uma lista com
  os valores dos titulos e descrições das
  respectivas publicações  

********************************************/
const PUB_TITLE_DESC_DATA_NAME_LOCAL_STORAGE = 'pub_title_desc_data';
const PUB_TITLE_DESC_CONTROLLER_STATUS_LOCAL_STORAGE = 'pub_title_desc_status';
const PUB_TITLE_DESC_STATUS_NOT_PUBLISH = 0;
const PUB_TITLE_DESC_STATUS_PUBLISH = 1;
const PUB_TITLE_DESC_TIME_PUBLISH = 10;

/* 
  Desative publication_automatic quando fizer por aqui
*/
function disablePublicationAutomatic() {
  localStorage.setItem("LAST_PUBLISHER_KEY", "");
}

/* 
  adicionar valores no formato correto no local storage
*/
function pub_title_desc_set_in_localStorage(data = []) {
  localStorage.setItem(PUB_TITLE_DESC_DATA_NAME_LOCAL_STORAGE, JSON.stringify(data));
}

/* 
  pega os dados do local storage já parciando os dados
*/
function pub_title_desc_get_data() {
  return JSON.parse(localStorage.getItem(PUB_TITLE_DESC_DATA_NAME_LOCAL_STORAGE)) ?? [];
}

/* 
  contabilizado o tamanho do array
*/
function pub_title_desc_data_count() {
  let data = pub_title_desc_get_data();
  return data.length;
}

/* 
  remove o primeiro elemento do array 
*/
function pub_title_desc_data_shift() {
  if (pub_title_desc_data_count() === 0) {
    return;
  }

  let data = pub_title_desc_get_data();
  data.shift();
  pub_title_desc_set_in_localStorage(data);
}

/* 
  apagar dados no local storage
*/
function pub_title_desc_remove_all_data() {
  localStorage.setItem(PUB_TITLE_DESC_DATA_NAME_LOCAL_STORAGE, JSON.stringify([]));
  alert('removido...');
}

/* 
  pega o nome do titulo da vez (Fila)
*/
function pub_title_desc_get_first_title() {
  let data = pub_title_desc_get_data();
  return data[0].title;
}

/* 
  pega a descrição da vez (Fila)
*/
function pub_title_desc_get_first_description() {
  let data = pub_title_desc_get_data();
  return data[0].description;
}


/* 
  salvar status do controller
*/

function pub_title_desc_set_button_interface() {
  /********************************************** 
  *
  * add botão para adicionar a lista da cib
  * 
  **********************************************/
  let botao_pub_title_desc_adicionar = document.createElement('button');
  botao_pub_title_desc_adicionar.innerHTML = 'Lista pub add';
  botao_pub_title_desc_adicionar.title = "Adicionar lista com títulos e descrições";
  botao_pub_title_desc_adicionar.classList.add('btn');
  botao_pub_title_desc_adicionar.classList.add('btn-small');
  botao_pub_title_desc_adicionar.addEventListener('click', () => {

    pub_title_desc_get_data_prompt_web();
    pub_title_desc_controller_set_status_in_local_storage(PUB_TITLE_DESC_STATUS_PUBLISH);

    setTimeout(() => {
      location.reload();
    }, (PUB_TITLE_DESC_TIME_PUBLISH * 1000) / 2);

  });

  let botao_pub_title_desc_remover = document.createElement('button');
  botao_pub_title_desc_remover.innerHTML = 'Lista pub rem';
  botao_pub_title_desc_remover.classList.add('btn');
  botao_pub_title_desc_remover.classList.add('btn-small');
  botao_pub_title_desc_remover.title = 'Remover lista de publicações';
  botao_pub_title_desc_remover.addEventListener('click', () => {

    pub_title_desc_remove_all_data();
    pub_title_desc_controller_set_status_in_local_storage(PUB_TITLE_DESC_STATUS_NOT_PUBLISH);
    location.reload();

  });

  let toolbar_cancel = document.querySelector('#toolbar-cancel'); 

  if(toolbar_cancel){
    toolbar_cancel.append(botao_pub_title_desc_adicionar);
    toolbar_cancel.append(botao_pub_title_desc_remover);
  }
}


function pub_title_desc_controller_set_status_in_local_storage(status) {
  localStorage.setItem(PUB_TITLE_DESC_CONTROLLER_STATUS_LOCAL_STORAGE, status);
}

function pub_title_desc_controller_get_status_in_local_storage() {
  return parseInt(localStorage.getItem(PUB_TITLE_DESC_CONTROLLER_STATUS_LOCAL_STORAGE));
}

function pub_title_desc_get_data_prompt_web() {

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
  pub_title_desc_set_in_localStorage(dados_tratados);

}

function pub_title_desc_controll_publish() {

  if (pub_title_desc_controller_get_status_in_local_storage() === PUB_TITLE_DESC_STATUS_NOT_PUBLISH)
    return;

  if (pub_title_desc_data_count() === 0) {
    pub_title_desc_controller_set_status_in_local_storage(PUB_TITLE_DESC_STATUS_NOT_PUBLISH);
    return;
  }

  /* seta o titulo e a descrição */
  let input_title = document.querySelector('#jform_title');
  let input_decription = document.querySelector('#jform_description');
  let btn_salvar_e_novo = document.querySelector('#toolbar-new > button');

  input_title.focus();
  input_title.value = pub_title_desc_get_first_title();
  input_decription.textContent = pub_title_desc_get_first_description();

  /* 
    remove os dados do local storage referente ao publicado shift do array 
  */
  pub_title_desc_data_shift();


  setTimeout(() => {
    input_title.blur();
  }, 1500);

  setTimeout(() => {
    disablePublicationAutomatic();
    btn_salvar_e_novo.click();
  }, PUB_TITLE_DESC_TIME_PUBLISH * 1000);
}


/* 

  MAIN

*/

window.addEventListener('load', () => {

  pub_title_desc_set_button_interface();

  pub_title_desc_controll_publish();

});