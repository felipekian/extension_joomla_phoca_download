"use strict"


const OcultarInputs = {

  alias: function() {

    document.querySelector('#general > div:nth-child(2)').style.display = "none";

  },

  features: function() {

    document.querySelector('#general > div:nth-child(31) > div.editor.wf-editor-container.mb-2').style.display = 'none';

  },

  changelog: function() {

    document.querySelector('#general > div:nth-child(34) > div.editor.wf-editor-container.mb-2').style.display = 'none';

  },
  
  notes: function() {

    document.querySelector('#general > div:nth-child(37) > div.editor.wf-editor-container.mb-2').style.display = 'none';

  },
  
  ordering: function() {

    document.querySelector('#general > div:nth-child(4)').style.display = 'none';

  },

  varios_em_sequencia: function() {

    for (let index = 6; index < 26; index++) {
      document.querySelector(`#general > div:nth-child(${index})`).style.display = "none";
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