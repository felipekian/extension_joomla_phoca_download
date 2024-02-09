"use strict"

window.addEventListener('load', () => {

  function select_listagem_by_id_desc() {
    let select_options_order = document.querySelector('#list_fullordering');
    let select_fake = document.querySelector('#list_fullordering_chzn > a > span');

    let OPTION = "a.id DESC";

    // select_options_order.style.display = "block";

    let options_categories = [...select_options_order.options];

    let refresh_page = false;

<<<<<<< HEAD
  /* changer selected */
  for (let i = 0; i < options_categories.length; i++) {

    /* refresh caso esteja outra option selecionada */
    if (options_categories[i].selected && options_categories[i].value != OPTION) {
      refresh_page = true;
=======
    /* changer selected */
    for (let i = 0; i < options_categories.length; i++) {

      /* refresh caso esteja outra option selecionada */
      if (options_categories[i].selected && options_categories[i].value != OPTION) {
        refresh_page = true;
      }

      if (options_categories[i].value == OPTION) {
        options_categories[i].selected = true;
        break;
      }
>>>>>>> e0ead41d7e1a33bcd4ed1c591dcb13b59a29d44b
    }

    if (refresh_page)
      document.querySelector('#adminForm').submit();
  }

<<<<<<< HEAD
  if (refresh_page)
    document.querySelector('#adminForm').submit();
}


/**
 *
 * Start  
 *
 */

window.addEventListener('load', () => {

  select_listagem_by_id_desc();

});
=======
  select_listagem_by_id_desc();

});
>>>>>>> e0ead41d7e1a33bcd4ed1c591dcb13b59a29d44b
