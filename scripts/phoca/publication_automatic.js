"use strict"


let btn_salvar = document.querySelector('#toolbar-apply > button');
let btn_salvar_e_novo = document.querySelector('#toolbar-new > button');
let btn_salvar_e_sair = document.querySelector('#toolbar-save > button');
let title_input_phoca_publish_automatic = document.querySelector('#jform_title');
const LAST_PUBLISHER_KEY = "LAST_PUBLISHER_KEY";
const LAST_PUBLISHER_ACTIVED_TOGGLE = "LAST_PUBLISHER_ACTIVED_TOGGLE";
const TEXTAREA_DESCRIPTION = "textarea_description";
const TIME_PUBLISH = 5;
let tempo_restante = TIME_PUBLISH;


/* Gatilhos */
btn_salvar.addEventListener('click', function () {
  save_last_publisher();
});
btn_salvar_e_novo.addEventListener('click', function () {
  save_last_publisher();
});
btn_salvar_e_sair.addEventListener('click', function () {
  save_last_publisher();
});


function save_last_publisher() {
  localStorage.setItem(LAST_PUBLISHER_KEY, title_input_phoca_publish_automatic.value);
}

function show_time_publish_countdown() {
  setInterval(() => {
    document.querySelector('body > header > div.container-title > h1').innerHTML = `File :: ${tempo_restante}seg`;
    tempo_restante--;
  }, 1000);
}

function title_save_and_new(title) {
  show_time_publish_countdown();

  title_input_phoca_publish_automatic.value = title;
  title_input_phoca_publish_automatic.focus();

  setTimeout(() => {
    title_input_phoca_publish_automatic.blur();
  }, 1000);

  setTimeout(() => {
    btn_salvar_e_novo.click();
  }, 1000 * TIME_PUBLISH);
}

function title_save_and_close(title) {
  show_time_publish_countdown();

  title_input_phoca_publish_automatic.value = title;
  title_input_phoca_publish_automatic.focus();

  /* da o blur com 70% do tempo para publicar para esperar o pc processar direito */
  setTimeout(() => {
    title_input_phoca_publish_automatic.blur();
  }, 1000 * TIME_PUBLISH * 0.7);

  setTimeout(() => {
    localStorage.setItem(TEXTAREA_DESCRIPTION, '');
    localStorage.setItem(LAST_PUBLISHER_KEY, '');
    window.open('https://saude.rr.gov.br/administrator/index.php?option=com_cache', '_blank'); // abre a pagina de limpar o cache
    btn_salvar_e_sair.click();
  }, 1000 * TIME_PUBLISH);
}

function get_cotacao_year_document_number() {
  let split_title = localStorage.getItem(LAST_PUBLISHER_KEY).replace(' - ', ' ').trim().split(' ');
  let tam_split_title = split_title.length;
  let ano = split_title[tam_split_title - 2];
  let numero_documento = split_title[tam_split_title - 1];

  return [ano, numero_documento];
}

function get_editais_year_document_number() {
  // deepcode ignore GlobalReplacementRegex: <please specify a reason of ignoring this>
  let split_title = localStorage.getItem(LAST_PUBLISHER_KEY).replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;
  let ano = split_title[tam_split_title - 1];
  let numero_documento = split_title[tam_split_title - 2];

  return [ano, numero_documento];
}

function checkNextPublish(titleAtual) {
  return (localStorage.getItem(LAST_PUBLISHER_KEY)).toLowerCase().indexOf(titleAtual.toLowerCase()) > 0;
}

/* Verificações para validar possiveis publicações */

function set_last_publisher() {
  if (localStorage.getItem(LAST_PUBLISHER_KEY).length == 0) {
    return;
  }

  /* 
    caso queira que certo tipo não publique automaticamente
  */
  if (
    checkNextPublish('retificação') ||
    checkNextPublish('errata do aviso de licitação')
  ) {
    return;
  }

  /*
  comunicado e proposta de cotação
  */
  if (checkNextPublish('modelo de comunicado de cotação')) {
    let [ano, numero_documento] = get_cotacao_year_document_number();
    let title = `:: Modelo de Proposta de Cotação ${ano} - ${numero_documento}`; // 2023 - 130
    title_save_and_close(title);
  }

  /*
  editais e termos
  */
  else if (checkNextPublish('Aviso de Licitação - PERP')) {
    let [ano, numero_documento] = get_editais_year_document_number();
    let title = `:: Edital de Licitação - PERP - ${numero_documento}/${ano}`; // 130/2023
    title_save_and_new(title);
  }
  else if (checkNextPublish('Edital de Licitação - PERP')) {
    let [ano, numero_documento] = get_editais_year_document_number();
    let title = `:: Minuta de Contrato de Licitação - PERP - ${numero_documento}/${ano}`; // 130/2023
    title_save_and_new(title);
  }
  else if (checkNextPublish('Minuta de Contrato de Licitação - PERP')) {
    let [ano, numero_documento] = get_editais_year_document_number();
    let title = `:: Planilha Estimativa de Licitação - PERP - ${numero_documento}/${ano}`; // 130/2023
    title_save_and_new(title);
  }
  else if (checkNextPublish('Planilha Estimativa de Licitação - PERP')) {
    let [ano, numero_documento] = get_editais_year_document_number();
    let title = `:: Termo de Referência de Licitação - PERP - ${numero_documento}/${ano}`; // 130/2023
    title_save_and_close(title);
  }

  /*
 editais e termos Republicação
 */
  else if (checkNextPublish('Aviso de Licitação - REPUBLICAÇÃO - PERP')) {
    let [ano, numero_documento] = get_editais_year_document_number();
    let title = `:: Edital de Licitação - REPUBLICAÇÃO - PERP - ${numero_documento}/${ano}`; // 130/2023
    title_save_and_new(title);
  }
  else if (checkNextPublish('Edital de Licitação - REPUBLICAÇÃO - PERP')) {
    let [ano, numero_documento] = get_editais_year_document_number();
    let title = `:: Minuta de Contrato de Licitação - REPUBLICAÇÃO - PERP - ${numero_documento}/${ano}`; // 130/2023
    title_save_and_new(title);
  }
  else if (checkNextPublish('Minuta de Contrato de Licitação - REPUBLICAÇÃO - PERP')) {
    let [ano, numero_documento] = get_editais_year_document_number();
    let title = `:: Planilha Estimativa de Licitação - REPUBLICAÇÃO - PERP - ${numero_documento}/${ano}`; // 130/2023
    title_save_and_new(title);
  }
  else if (checkNextPublish('Planilha Estimativa de Licitação - REPUBLICAÇÃO - PERP')) {
    let [ano, numero_documento] = get_editais_year_document_number();
    let title = `:: Termo de Referência de Licitação - REPUBLICAÇÃO - PERP - ${numero_documento}/${ano}`; // 130/2023
    title_save_and_close(title);
  }
}



window.addEventListener('load', () => {

  if (localStorage.getItem(LAST_PUBLISHER_ACTIVED_TOGGLE) == 1) {
    set_last_publisher();
  }

  /* Show botão toggle publicacao automatica */
  let botao_toggle_pub_auto = document.createElement('button');
  botao_toggle_pub_auto.innerHTML = localStorage.getItem(LAST_PUBLISHER_ACTIVED_TOGGLE) == 1 ? 'Desativar' : 'Ativar';
  botao_toggle_pub_auto.classList.add('btn');
  botao_toggle_pub_auto.classList.add('btn-small');
  botao_toggle_pub_auto.title = 'ativar/desativar publicação automática';
  botao_toggle_pub_auto.addEventListener('click', () => {
    localStorage.setItem(LAST_PUBLISHER_ACTIVED_TOGGLE, (localStorage.getItem(LAST_PUBLISHER_ACTIVED_TOGGLE) == 1 ? 0 : 1));
    localStorage.setItem(TEXTAREA_DESCRIPTION, '');
    localStorage.setItem(LAST_PUBLISHER_KEY, '');
    location.reload();
  });

  document.querySelector('#toolbar-cancel').append(botao_toggle_pub_auto);

});