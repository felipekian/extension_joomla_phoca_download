"use strict"


const OcultarInputs = {

  alias: function() {

    let hide_alias = document.querySelector('#general > div:nth-child(2)');
    
    if(hide_alias){
      hide_alias.style.display = "none";
    }

  },

  features: function() {

    let hide_features = document.querySelector('#general > div:nth-child(31) > div.editor.wf-editor-container.mb-2');
    
    if(hide_features){
      hide_features.style.display = 'none';
    }

  },

  changelog: function() {

    let hide_changelog = document.querySelector('#general > div:nth-child(34) > div.editor.wf-editor-container.mb-2'); 

    if(hide_changelog){
      hide_changelog.style.display = 'none';
    }

  },
  
  notes: function() {

    let hide_notes = document.querySelector('#general > div:nth-child(37) > div.editor.wf-editor-container.mb-2');

    if(hide_notes){
      hide_notes.style.display = 'none';
    }

  },
  
  ordering: function() {

    let hide_ordering = document.querySelector('#general > div:nth-child(4)');

    if(hide_ordering){
      hide_ordering.style.display = 'none';
    }

  },

  varios_em_sequencia: function() {

    for (let index = 6; index < 26; index++) {

      let hide_varios_em_sequencia = document.querySelector(`#general > div:nth-child(${index})`);
      
      if(hide_varios_em_sequencia){
        hide_varios_em_sequencia.style.display = "none";
      }

    }
  }

}


const MountedOcultarInputsController = {

  run: function() {

    window.addEventListener('load', () => {

      OcultarInputs.alias();
      OcultarInputs.changelog();
      OcultarInputs.features();
      OcultarInputs.notes();
      OcultarInputs.ordering();
      OcultarInputs.varios_em_sequencia();
    
    });

  }

}


MountedOcultarInputsController.run();