"use strict"


let btn_salvar = document.querySelector('#toolbar-apply > button');
let btn_salvar_e_novo = document.querySelector('#toolbar-new > button');
let btn_salvar_e_sair = document.querySelector('#toolbar-save > button');
let title_input_phoca_publish_automatic = document.querySelector('#jform_title');

const CONSTANTES_PUBLISH_AUTOMATIC = {

  LAST_PUBLISHER_KEY: "LAST_PUBLISHER_KEY",
  LAST_PUBLISHER_ACTIVED_TOGGLE: "LAST_PUBLISHER_ACTIVED_TOGGLE",
  TEXTAREA_DESCRIPTION: "textarea_description",
  TIME_PUBLISH: 5
  
}

let TEMPO_RESTANTE = CONSTANTES_PUBLISH_AUTOMATIC.TIME_PUBLISH;

const Utilitarios = {

  get_cotacao_year_document_number: function () {
    let split_title = localStorage.getItem(CONSTANTES_PUBLISH_AUTOMATIC.LAST_PUBLISHER_KEY).replace(' - ', ' ').trim().split(' ');
    let tam_split_title = split_title.length;
    let ano = split_title[tam_split_title - 2];
    let numero_documento = split_title[tam_split_title - 1];

    return [ano, numero_documento];
  },

  get_editais_year_document_number: function () {
    // deepcode ignore GlobalReplacementRegex: <please specify a reason of ignoring this>
    let split_title = localStorage.getItem(CONSTANTES_PUBLISH_AUTOMATIC.LAST_PUBLISHER_KEY).replace(' - ', ' ').replace('/', ' ').trim().split(' ');
    let tam_split_title = split_title.length;
    let ano = split_title[tam_split_title - 1];
    let numero_documento = split_title[tam_split_title - 2];

    return [ano, numero_documento];
  },

  checkNextPublish: function (titleAtual) {
    return (localStorage.getItem(CONSTANTES_PUBLISH_AUTOMATIC.LAST_PUBLISHER_KEY)).toLowerCase().indexOf(titleAtual.toLowerCase()) > 0;
  }

}


const CachePublishAutomatic = {

  open: function () {

    window.open('https://saude.rr.gov.br/administrator/index.php?option=com_cache', '_blank');

  }

}


const Timer = {

  show_countdown: function () {
    setInterval(() => {
      document.querySelector('body > header > div.container-title > h1').innerHTML = `File :: ${TEMPO_RESTANTE}seg`;
      TEMPO_RESTANTE--;
    }, 1000);
  }

}


const LastPublishController = {

  handle: function () {

    if (this.block()) return;

    this.comunicadoProposta();

    this.editais();

    this.republicacaoEditais();

  },

  block: function () {

    if (
      localStorage.getItem(CONSTANTES_PUBLISH_AUTOMATIC.LAST_PUBLISHER_KEY).length == 0 ||
      Utilitarios.checkNextPublish('retificação') ||
      Utilitarios.checkNextPublish('errata do aviso de licitação')
    ) {
      return true;
    }

    return false;

  },

  comunicadoProposta: function () {

    if (Utilitarios.checkNextPublish('modelo de comunicado de cotação')) {
      let [ano, numero_documento] = Utilitarios.get_cotacao_year_document_number();
      let title = `:: Modelo de Proposta de Cotação ${ano} - ${numero_documento}`; // 2023 - 130
      PublisherAutomaticController.title_save_and_close(title);
    }

  },

  editais: function () {

    if (Utilitarios.checkNextPublish('Aviso de Licitação - PERP')) {
      let [ano, numero_documento] = Utilitarios.get_editais_year_document_number();
      let title = `:: Edital de Licitação - PERP - ${numero_documento}/${ano}`; // 130/2023
      PublisherAutomaticController.title_save_and_new(title);
    }
    else if (Utilitarios.checkNextPublish('Edital de Licitação - PERP')) {
      let [ano, numero_documento] = Utilitarios.get_editais_year_document_number();
      let title = `:: Minuta de Contrato de Licitação - PERP - ${numero_documento}/${ano}`; // 130/2023
      PublisherAutomaticController.title_save_and_new(title);
    }
    else if (Utilitarios.checkNextPublish('Minuta de Contrato de Licitação - PERP')) {
      let [ano, numero_documento] = Utilitarios.get_editais_year_document_number();
      let title = `:: Planilha Estimativa de Licitação - PERP - ${numero_documento}/${ano}`; // 130/2023
      PublisherAutomaticController.title_save_and_new(title);
    }
    else if (Utilitarios.checkNextPublish('Planilha Estimativa de Licitação - PERP')) {
      let [ano, numero_documento] = Utilitarios.get_editais_year_document_number();
      let title = `:: Termo de Referência de Licitação - PERP - ${numero_documento}/${ano}`; // 130/2023
      PublisherAutomaticController.title_save_and_close(title);
    }

  },

  republicacaoEditais: function () {

    if (Utilitarios.checkNextPublish('Aviso de Licitação - REPUBLICAÇÃO - PERP')) {
      let [ano, numero_documento] = Utilitarios.get_editais_year_document_number();
      let title = `:: Edital de Licitação - REPUBLICAÇÃO - PERP - ${numero_documento}/${ano}`; // 130/2023
      PublisherAutomaticController.title_save_and_new(title);
    }
    else if (Utilitarios.checkNextPublish('Edital de Licitação - REPUBLICAÇÃO - PERP')) {
      let [ano, numero_documento] = Utilitarios.get_editais_year_document_number();
      let title = `:: Minuta de Contrato de Licitação - REPUBLICAÇÃO - PERP - ${numero_documento}/${ano}`; // 130/2023
      PublisherAutomaticController.title_save_and_new(title);
    }
    else if (Utilitarios.checkNextPublish('Minuta de Contrato de Licitação - REPUBLICAÇÃO - PERP')) {
      let [ano, numero_documento] = Utilitarios.get_editais_year_document_number();
      let title = `:: Planilha Estimativa de Licitação - REPUBLICAÇÃO - PERP - ${numero_documento}/${ano}`; // 130/2023
      PublisherAutomaticController.title_save_and_new(title);
    }
    else if (Utilitarios.checkNextPublish('Planilha Estimativa de Licitação - REPUBLICAÇÃO - PERP')) {
      let [ano, numero_documento] = Utilitarios.get_editais_year_document_number();
      let title = `:: Termo de Referência de Licitação - REPUBLICAÇÃO - PERP - ${numero_documento}/${ano}`; // 130/2023
      PublisherAutomaticController.title_save_and_close(title);
    }

  }


}


const PublisherAutomaticController = {

  save_last_publisher: function () {

    localStorage.setItem(CONSTANTES_PUBLISH_AUTOMATIC.LAST_PUBLISHER_KEY, title_input_phoca_publish_automatic.value);

  },

  title_save_and_new: function (title) {

    Timer.show_countdown();

    title_input_phoca_publish_automatic.value = title;
    title_input_phoca_publish_automatic.focus();

    setTimeout(() => {
      title_input_phoca_publish_automatic.blur();
    }, 1000);

    setTimeout(() => {
      btn_salvar_e_novo.click();
    }, 1000 * CONSTANTES_PUBLISH_AUTOMATIC.TIME_PUBLISH);

  },

  title_save_and_close: function (title) {

    Timer.show_countdown();

    title_input_phoca_publish_automatic.value = title;
    title_input_phoca_publish_automatic.focus();

    /* da o blur com 70% do tempo para publicar para esperar o pc processar direito */
    setTimeout(() => {

      title_input_phoca_publish_automatic.blur();

    }, 1000 * CONSTANTES_PUBLISH_AUTOMATIC.TIME_PUBLISH * 0.7);

    setTimeout(() => {

      localStorage.setItem(CONSTANTES_PUBLISH_AUTOMATIC.TEXTAREA_DESCRIPTION, '');
      localStorage.setItem(CONSTANTES_PUBLISH_AUTOMATIC.LAST_PUBLISHER_KEY, '');

      // CachePublishAutomatic.open();

      btn_salvar_e_sair.click();

    }, 1000 * CONSTANTES_PUBLISH_AUTOMATIC.TIME_PUBLISH);

  },

  checkActivedPublishAutomatic: function () {

    if (localStorage.getItem(CONSTANTES_PUBLISH_AUTOMATIC.LAST_PUBLISHER_ACTIVED_TOGGLE) == 1) {
      LastPublishController.handle();
    }

  }

}


const ElementInterfacePublishAutomatic = {

  btn_toggle_active_publish_automatic: function () {

    let botao_toggle_pub_auto = document.createElement('button');

    botao_toggle_pub_auto.innerHTML = localStorage.getItem(CONSTANTES_PUBLISH_AUTOMATIC.LAST_PUBLISHER_ACTIVED_TOGGLE) == 1 ? 'Desativar' : 'Ativar';
    botao_toggle_pub_auto.classList.add('btn');
    botao_toggle_pub_auto.classList.add('btn-small');
    botao_toggle_pub_auto.title = 'ativar/desativar publicação automática';

    botao_toggle_pub_auto.addEventListener('click', () => {
      localStorage.setItem(CONSTANTES_PUBLISH_AUTOMATIC.LAST_PUBLISHER_ACTIVED_TOGGLE, (localStorage.getItem(CONSTANTES_PUBLISH_AUTOMATIC.LAST_PUBLISHER_ACTIVED_TOGGLE) == 1 ? 0 : 1));
      localStorage.setItem(CONSTANTES_PUBLISH_AUTOMATIC.TEXTAREA_DESCRIPTION, '');
      localStorage.setItem(CONSTANTES_PUBLISH_AUTOMATIC.LAST_PUBLISHER_KEY, '');
      location.reload();
    });

    document.querySelector('#toolbar-cancel').append(botao_toggle_pub_auto);

  }

}


const Listenners = {

  btnSalvar: function () {

    btn_salvar.addEventListener('click', function () {

      PublisherAutomaticController.save_last_publisher();

    });

  },

  btnSalvarENovo: function () {

    btn_salvar_e_novo.addEventListener('click', function () {

      PublisherAutomaticController.save_last_publisher();

    });

  },

  btnSalvarESair: function () {

    btn_salvar_e_sair.addEventListener('click', function () {

      PublisherAutomaticController.save_last_publisher();

    });

  },










}


const MountedPublishAutomatic = {

  handle: function () {

    window.addEventListener('load', () => {

      PublisherAutomaticController.checkActivedPublishAutomatic();

      ElementInterfacePublishAutomatic.btn_toggle_active_publish_automatic();

      Listenners.btnSalvar();
      Listenners.btnSalvarENovo();
      Listenners.btnSalvarESair();

    });

  }

}

MountedPublishAutomatic.handle();

