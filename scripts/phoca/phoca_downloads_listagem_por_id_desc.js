"use strict"


const PhocaDownloadsListagemByIdDesc = {

  handle: function () {

    let select_options_order = document.querySelector('#list_fullordering');

    let OPTION = "a.id DESC";

    if (select_options_order.value.toLowerCase() !== OPTION.toLowerCase()) {
        
      setTimeout(() => {
          select_options_order.value = OPTION;
          select_options_order.form.submit();
          select_options_order.dispatchEvent(new Event('change'));
        },  2000);

    }
  }
}


window.addEventListener('load', () => {

  PhocaDownloadsListagemByIdDesc.handle();

});
