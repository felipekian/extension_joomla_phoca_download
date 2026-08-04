"use strict"


const OcultarInputs = {

  features: function () {

    let hide_features = document.querySelector('#general > div.control-group-clear.ph-par-features');

    if (hide_features) {
      hide_features.style.display = 'none';
    }

  },

  alias: function () {

    let hide_alias = document.querySelector('#phAdminEdit > div > div > div > div:nth-child(2) > div');

    if (hide_alias) {
      hide_alias.style.display = 'none';
    }

  },

  changelog: function () {

    let hide_changelog = document.querySelector('#general > div.control-group-clear.ph-par-changelog');

    if (hide_changelog) {
      hide_changelog.style.display = 'none';
    }

  },

  notes: function () {

    let hide_notes = document.querySelector('#general > div.control-group-clear.ph-par-notes');

    if (hide_notes) {
      hide_notes.style.display = 'none';
    }

  },

  description_hide_footer: function () {

    let hide_description_footer = document.querySelector('#general > div.control-group-clear.ph-par-description > div:nth-child(2) > joomla-editor-none > div');

    if (hide_description_footer) {
      hide_description_footer.style.display = 'none';
    }

  },

  ordering: function () {

    let hide_ordering = document.querySelector('#general > div.control-group.ph-par-ordering');

    if (hide_ordering) {
      hide_ordering.style.display = 'none';
    }

  },

  varios_em_sequencia: function () {

    for (let index = 4; index < 24; index++) {

      let hide_varios_em_sequencia = document.querySelector(`#general > div:nth-child(${index})`);

      if (hide_varios_em_sequencia) {
        hide_varios_em_sequencia.style.display = "none";
      }

    }
  }

}


const Title = {

  fullWidth: function () {

    // como o alias foi removido, o titulo agora ocupa toda a largura da tela, então vamos forçar o titulo a ocupar toda a largura da tela para ficar mais bonito.

    let divTitleControl = document.querySelector('#phAdminEdit > div > div > div > div.col-12');

    divTitleControl.classList.remove('col-md-6');

  }

}

const MountedOcultarInputsController = {

  run: function () {

    window.addEventListener('load', () => {


      Title.fullWidth();

      OcultarInputs.alias();
      OcultarInputs.changelog();
      OcultarInputs.features();
      OcultarInputs.notes();
      OcultarInputs.description_hide_footer();
      OcultarInputs.ordering();
      OcultarInputs.varios_em_sequencia();

    });

  }

}


MountedOcultarInputsController.run();