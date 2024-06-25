"use strict"


const DescriptionController = {

  adicionar_descricao: function() {

    let descricao = window.prompt('Descrição:');
  
    if (!descricao) {
      localStorage.setItem('textarea_description', ' ');
      localStorage.setItem('textarea_description_date', Data.getDataDeHoje());
      return;
    }
  
    localStorage.setItem('textarea_description', descricao);
    localStorage.setItem('textarea_description_date', Data.getDataDeHoje());
  
    location.reload();

  },
   
  
  remover_descricao: function() {

    localStorage.setItem('textarea_description', '');
  
    location.reload();

  },
  
  
  set_descricao_automatica_caso_exista: function() {
  
    if (localStorage.getItem('textarea_description').length === 0) {
      this.adicionar_descricao();
    }
  
    document.querySelector('#jform_description').textContent = localStorage.getItem('textarea_description');
  
  },


  verificar_se_data_da_descricao_e_atual: function() {

    /**********************************************************************************************
       Verifica a data atual e a salva no localstorage são diferentes para limpar a descrição
    **********************************************************************************************/

      if (Data.getDataDeHoje() != localStorage.getItem('textarea_description_date')) {
        this.remover_descricao();
      }

  }

}


const ShortCuts = {
  
  adicionarDescricao: function() {

    document.addEventListener("keydown", function (event) {
  
      if (event.ctrlKey && event.altKey && (event.key === 'd' || event.key === 'D')) {
    
        DescriptionController.adicionar_descricao();
    
      }
    
    });
  },
  
  removerDescricao: function() {

    document.addEventListener("keydown", function (event) {
  
      if (event.ctrlKey && event.altKey && (event.key === 'r' || event.key === 'R')) {

        if (!confirm('Confirme para remover descrição:')) return;
    
        DescriptionController.remover_descricao();
    
      }
    
    });

  }

}


const ElementoInterfaceGrafica = {

  btnAdicionarDescricao: function () {

    let botao_descricao_adicionar = document.createElement('button');

    botao_descricao_adicionar.innerHTML = 'Desc add';
    botao_descricao_adicionar.title = "Adicionar descrição automatica (Ctrl + Alt + D)";
    botao_descricao_adicionar.classList.add('btn');
    botao_descricao_adicionar.classList.add('btn-small');

    botao_descricao_adicionar.addEventListener('click', () => {
      DescriptionController.adicionar_descricao();
    });

    this.setNaInterface(botao_descricao_adicionar);

  },

  btnRemoveDescricao: function () {

    let botao_descricao_remover = document.createElement('button');

    botao_descricao_remover.innerHTML = 'Desc rem';
    botao_descricao_remover.classList.add('btn');
    botao_descricao_remover.classList.add('btn-small');
    botao_descricao_remover.title = 'Remover descrição automatica (Ctrl + Alt + R)';

    botao_descricao_remover.addEventListener('click', () => {
      DescriptionController.remover_descricao();
    });

    this.setNaInterface(botao_descricao_remover);

  },

  setNaInterface: function (btn) {
    document.querySelector('#toolbar-cancel').append(btn);
  }

}


const Mounted = {

  run: function () {
    
    DescriptionController.verificar_se_data_da_descricao_e_atual();
    DescriptionController.set_descricao_automatica_caso_exista();

    ElementoInterfaceGrafica.btnAdicionarDescricao();
    ElementoInterfaceGrafica.btnRemoveDescricao();

    ShortCuts.adicionarDescricao();
    ShortCuts.removerDescricao();

  }

}


Mounted.run();




