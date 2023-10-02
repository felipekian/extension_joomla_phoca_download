"use strict"

let btn_salvar = document.querySelector('#toolbar-apply > button');
let btn_salvar_e_novo = document.querySelector('#toolbar-new > button');
let btn_salvar_e_sair = document.querySelector('#toolbar-save > button');
let title_input_phoca_publish_automatic = document.querySelector('#jform_title');
let LAST_PUBLISHER_KEY = "LAST_PUBLISHER_KEY";
const TIME_PUBLISH = 1000 * 10;

function save_last_publisher() {
  localStorage.setItem(LAST_PUBLISHER_KEY, title_input_phoca_publish_automatic.value);
}

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

function title_save_and_new(title) {
  title_input_phoca_publish_automatic.value = title;
  title_input_phoca_publish_automatic.focus();
  title_input_phoca_publish_automatic.blur();
  setTimeout(() => {
    btn_salvar_e_novo.click();
  }, TIME_PUBLISH);
}

function title_save_and_close(title) {
  title_input_phoca_publish_automatic.value = title;
  title_input_phoca_publish_automatic.focus();
  title_input_phoca_publish_automatic.blur();
  localStorage.setItem('textarea_description', '');
  localStorage.setItem(LAST_PUBLISHER_KEY, '');
  setTimeout(() => {
    btn_salvar_e_sair.click();
  }, TIME_PUBLISH);
}

function get_cotacao_year_document_number() {
  let split_title = localStorage.getItem(LAST_PUBLISHER_KEY).replace(' - ', ' ').trim().split(' ');
  let tam_split_title = split_title.length;
  let ano = split_title[tam_split_title - 2];
  let numero_documento = split_title[tam_split_title - 1];

  return [ano, numero_documento];
}

function get_editais_year_document_number() {
  let split_title = localStorage.getItem(LAST_PUBLISHER_KEY).replace(' - ', ' ').replace('/', ' ').trim().split(' ');
  let tam_split_title = split_title.length;
  let ano = split_title[tam_split_title - 1];
  let numero_documento = split_title[tam_split_title - 2];

  return [ano, numero_documento];
}

/* Verificações para validar possiveis publicações */

function set_last_publisher() {
  if (localStorage.getItem(LAST_PUBLISHER_KEY).length == 0) {
    return;
  }

  /* 
  comunicado e proposta de cotação 
  */
  if ((localStorage.getItem(LAST_PUBLISHER_KEY)).toLowerCase().indexOf(("Modelo de Comunicado de Cotação").toLowerCase()) > 0) {
    let [ano, numero_documento] = get_cotacao_year_document_number();
    let title = `:: Modelo de Proposta de Cotação ${ano} - ${numero_documento}`; // 2023 - 130
    title_save_and_close(title);
  }

  /* 
  editais 
  */
  else if ((localStorage.getItem(LAST_PUBLISHER_KEY)).toLowerCase().indexOf(("Aviso de Licitação - PERP -").toLowerCase()) > 0) {
    let [ano, numero_documento] = get_editais_year_document_number();
    let title = `:: Edital de Licitação - PERP - ${numero_documento}/${ano}`; // 130/2023
    title_save_and_new(title);
  }
  else if ((localStorage.getItem(LAST_PUBLISHER_KEY)).toLowerCase().indexOf(("Edital de Licitação - PERP -").toLowerCase()) > 0) {
    let [ano, numero_documento] = get_editais_year_document_number();
    let title = `:: Minuta de Contrato de Licitação - PERP - ${numero_documento}/${ano}`; // 130/2023
    title_save_and_new(title);
  }
  else if ((localStorage.getItem(LAST_PUBLISHER_KEY)).toLowerCase().indexOf(("Minuta de Contrato de Licitação").toLowerCase()) > 0) {
    let [ano, numero_documento] = get_editais_year_document_number();
    let title = `:: Planilha Estimativa de Licitação - PERP - ${numero_documento}/${ano}`; // 130/2023
    title_save_and_new(title);
  }
  else if ((localStorage.getItem(LAST_PUBLISHER_KEY)).toLowerCase().indexOf(("Planilha Estimativa de Licitação").toLowerCase()) > 0) {
    let [ano, numero_documento] = get_editais_year_document_number();
    let title = `:: Termo de Referência de Licitação - PERP - ${numero_documento}/${ano}`; // 130/2023
    title_save_and_close(title);
  }
}

set_last_publisher();