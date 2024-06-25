"use strict"


const PublicacaoController = {

  setDataInicioPublicacaoInput: function(data_publish, date_old_publish) {

    if (date_old_publish === Data.getDataDeHoje()) {

      let input_date_publish = document.querySelector('#jform_publish_up');

      input_date_publish.dataset.altValue = "" + data_publish;
      input_date_publish.dataset.localValue = "" + data_publish;
      input_date_publish.value = "" + data_publish;
      input_date_publish.click();

    }

  },
  
  
  startPublishInputControl: function() {
  
    this.setDataInicioPublicacaoInput(localStorage.getItem('joomla_start_publish'), localStorage.getItem('joomla_start_publish_date'));
  
    document.querySelector('#jform_publish_up').addEventListener('blur', (event) => {

      let data = Data.formatar_data_para_meia_noite(event.target.value);
      localStorage.setItem('joomla_start_publish', data);
      localStorage.setItem('joomla_start_publish_date', Data.getDataDeHoje());
      this.setDataInicioPublicacaoInput(data, localStorage.getItem('joomla_start_publish_date'));

    });

  }

}


const ElementoDeInterfaceGrafica = {

  setBotaoLimparInputDataAgendada: function() {
    /********************************************** 
    *
    * add botão para limpar data para publicação
    * 
    **********************************************/
    let button_data_publish_clear = document.createElement('button');

    button_data_publish_clear.innerHTML = 'Limpar data pub';
    button_data_publish_clear.title = "Limpar data de agendamento de publicação";
    button_data_publish_clear.classList.add('btn');
    button_data_publish_clear.classList.add('btn-small');

    button_data_publish_clear.addEventListener('click', () => {
    
      /* limpa o input de data agendada para publicação */
      let input_date_publish = document.querySelector('#jform_publish_up');
      input_date_publish.dataset.altValue = "";
      input_date_publish.dataset.localValue = "";
      input_date_publish.value = "";
      localStorage.setItem('joomla_start_publish', "");
      localStorage.setItem('joomla_start_publish_date', Data.getDataDeHoje());
  
      alert('Data de publicação agendada foi limpo!');
      
    });
  
    document.querySelector('#toolbar-cancel').append(button_data_publish_clear);

  }

}



/**
 *
 * Start
 * 
 **/

window.addEventListener('load', () => {

  setTimeout(() => {

    ElementoDeInterfaceGrafica.setBotaoLimparInputDataAgendada();    
    
  }, 50);

  PublicacaoController.startPublishInputControl();

});

