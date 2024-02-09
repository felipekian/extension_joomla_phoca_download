"use strict"

window.addEventListener('load', () => {


  let btn_salvar = document.querySelector('#toolbar-apply > button');
  let btn_salvar_e_novo = document.querySelector('#toolbar-new > button');
  let btn_salvar_e_sair = document.querySelector('#toolbar-save > button');
  let title_input_phoca_publish_automatic = document.querySelector('#jform_title');
  let LAST_PUBLISHER_KEY = "LAST_PUBLISHER_KEY";
  let LAST_PUBLISHER_ACTIVED_TOGGLE = "LAST_PUBLISHER_ACTIVED_TOGGLE";
  const TIME_PUBLISH = 5;
  let tempo_restante = TIME_PUBLISH;

  function save_last_publisher() {
    localStorage.setItem(LAST_PUBLISHER_KEY, title_input_phoca_publish_automatic.value);
  }

  function show_time_publish_countdown() {
    setInterval(() => {
      document.querySelector('body > header > div.container-title > h1').innerHTML = `File :: ${tempo_restante}seg`;
      tempo_restante--;
    }, 1000);
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
      localStorage.setItem('textarea_description', '');
      localStorage.setItem(LAST_PUBLISHER_KEY, '');
      window.open('https://saude.rr.gov.br/administrator/index.php?option=com_cache', '_blank'); // abre a pagina de limpar o cache
      btn_salvar_e_sair.click();
    }, 1000 * TIME_PUBLISH);
  }

<<<<<<< HEAD
  /* 
 editais e termos Republicação
 */
  else if ((localStorage.getItem(LAST_PUBLISHER_KEY)).toLowerCase().indexOf(("Aviso de Licitação - REPUBLICAÇÃO - PERP -").toLowerCase()) > 0) {
    let [ano, numero_documento] = get_editais_year_document_number();
    let title = `:: Edital de Licitação - REPUBLICAÇÃO - PERP - ${numero_documento}/${ano}`; // 130/2023
    title_save_and_new(title);
  }
  else if ((localStorage.getItem(LAST_PUBLISHER_KEY)).toLowerCase().indexOf(("Edital de Licitação - REPUBLICAÇÃO - PERP -").toLowerCase()) > 0) {
    let [ano, numero_documento] = get_editais_year_document_number();
    let title = `:: Minuta de Contrato de Licitação - REPUBLICAÇÃO - PERP - ${numero_documento}/${ano}`; // 130/2023
    title_save_and_new(title);
  }
  else if ((localStorage.getItem(LAST_PUBLISHER_KEY)).toLowerCase().indexOf(("Minuta de Contrato de Licitação - REPUBLICAÇÃO - PERP -").toLowerCase()) > 0) {
    let [ano, numero_documento] = get_editais_year_document_number();
    let title = `:: Planilha Estimativa de Licitação - REPUBLICAÇÃO - PERP - ${numero_documento}/${ano}`; // 130/2023
    title_save_and_new(title);
  }
  else if ((localStorage.getItem(LAST_PUBLISHER_KEY)).toLowerCase().indexOf(("Planilha Estimativa de Licitação - REPUBLICAÇÃO - PERP -").toLowerCase()) > 0) {
    let [ano, numero_documento] = get_editais_year_document_number();
    let title = `:: Termo de Referência de Licitação - REPUBLICAÇÃO - PERP - ${numero_documento}/${ano}`; // 130/2023
    title_save_and_close(title);
  }
}

/**
 * 
 * Start
 *  
 */

window.addEventListener('load', () => {

=======
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

    if ((localStorage.getItem(LAST_PUBLISHER_KEY)).toLowerCase().indexOf(("RETIFICAÇÃO").toLowerCase()) > 0) {
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
    editais e termos
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
    else if ((localStorage.getItem(LAST_PUBLISHER_KEY)).toLowerCase().indexOf(("Minuta de Contrato de Licitação - PERP -").toLowerCase()) > 0) {
      let [ano, numero_documento] = get_editais_year_document_number();
      let title = `:: Planilha Estimativa de Licitação - PERP - ${numero_documento}/${ano}`; // 130/2023
      title_save_and_new(title);
    }
    else if ((localStorage.getItem(LAST_PUBLISHER_KEY)).toLowerCase().indexOf(("Planilha Estimativa de Licitação - PERP -").toLowerCase()) > 0) {
      let [ano, numero_documento] = get_editais_year_document_number();
      let title = `:: Termo de Referência de Licitação - PERP - ${numero_documento}/${ano}`; // 130/2023
      title_save_and_close(title);
    }

    /* 
   editais e termos Republicação
   */
    else if ((localStorage.getItem(LAST_PUBLISHER_KEY)).toLowerCase().indexOf(("Aviso de Licitação - REPUBLICAÇÃO - PERP -").toLowerCase()) > 0) {
      let [ano, numero_documento] = get_editais_year_document_number();
      let title = `:: Edital de Licitação - REPUBLICAÇÃO - PERP - ${numero_documento}/${ano}`; // 130/2023
      title_save_and_new(title);
    }
    else if ((localStorage.getItem(LAST_PUBLISHER_KEY)).toLowerCase().indexOf(("Edital de Licitação - REPUBLICAÇÃO - PERP -").toLowerCase()) > 0) {
      let [ano, numero_documento] = get_editais_year_document_number();
      let title = `:: Minuta de Contrato de Licitação - REPUBLICAÇÃO - PERP - ${numero_documento}/${ano}`; // 130/2023
      title_save_and_new(title);
    }
    else if ((localStorage.getItem(LAST_PUBLISHER_KEY)).toLowerCase().indexOf(("Minuta de Contrato de Licitação - REPUBLICAÇÃO - PERP -").toLowerCase()) > 0) {
      let [ano, numero_documento] = get_editais_year_document_number();
      let title = `:: Planilha Estimativa de Licitação - REPUBLICAÇÃO - PERP - ${numero_documento}/${ano}`; // 130/2023
      title_save_and_new(title);
    }
    else if ((localStorage.getItem(LAST_PUBLISHER_KEY)).toLowerCase().indexOf(("Planilha Estimativa de Licitação - REPUBLICAÇÃO - PERP -").toLowerCase()) > 0) {
      let [ano, numero_documento] = get_editais_year_document_number();
      let title = `:: Termo de Referência de Licitação - REPUBLICAÇÃO - PERP - ${numero_documento}/${ano}`; // 130/2023
      title_save_and_close(title);
    }
  }

>>>>>>> e0ead41d7e1a33bcd4ed1c591dcb13b59a29d44b
  if (localStorage.getItem(LAST_PUBLISHER_ACTIVED_TOGGLE) == 1) {
    set_last_publisher();
  }

  /* Show botão toggle publicacao automatica */
  let botao_toggle_pub_auto = document.createElement('button');
  botao_toggle_pub_auto.innerHTML = localStorage.getItem(LAST_PUBLISHER_ACTIVED_TOGGLE) == 1 ? 'Desativar' : 'Ativar';
  botao_toggle_pub_auto.classList.add('btn');
  botao_toggle_pub_auto.classList.add('btn-small');
  botao_toggle_pub_auto.title = 'Toggle publicação automatica';
  botao_toggle_pub_auto.addEventListener('click', () => {
    localStorage.setItem(LAST_PUBLISHER_ACTIVED_TOGGLE, (localStorage.getItem(LAST_PUBLISHER_ACTIVED_TOGGLE) == 1 ? 0 : 1));
    let show_alert_toggle = localStorage.getItem(LAST_PUBLISHER_ACTIVED_TOGGLE) == 1 ? 'Ativado' : 'Desativado';
    location.reload();
  });

  document.querySelector('#toolbar-cancel').append(botao_toggle_pub_auto);

});