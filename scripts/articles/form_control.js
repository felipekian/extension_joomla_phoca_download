"use strict"


function category_noticia() {
  let select_categories = document.querySelector('#jform_catid');
  let select_fake = document.querySelector('#jform_catid_chzn > a > span');

  let OPTION = "Notícias";

  // select_categories.style.display = "block";

  let options_categories = [...select_categories.options];

  for (let i = 0; i < options_categories.length; i++) {
    if (options_categories[i].innerText == OPTION) {
      options_categories[i].selected = true;
      break;
    }
  }

  select_fake.innerHTML = OPTION;
  select_fake.classList.add('result-selected');
  select_fake.classList.add('highlighted');
}

/**
 * 
 * Start
 * 
 */

window.addEventListener('load', () => {

  category_noticia();

});
