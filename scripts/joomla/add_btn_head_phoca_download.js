"use strict"

window.addEventListener('load', () => {

<<<<<<< HEAD
  let link_phoca_downloads = document.createElement('a');
=======
  let link_phoca_downloads = document.createElement('a')
>>>>>>> e0ead41d7e1a33bcd4ed1c591dcb13b59a29d44b
  link_phoca_downloads.href = 'https://saude.rr.gov.br/administrator/index.php?option=com_phocadownload&view=phocadownloadfile&layout=edit';
  link_phoca_downloads.textContent = 'Phoca';
  link_phoca_downloads.classList.add('brand');
  link_phoca_downloads.style.marginLeft = '1px';

  document.querySelector('#sp-pagebuiler-menu').appendChild(link_phoca_downloads);

});