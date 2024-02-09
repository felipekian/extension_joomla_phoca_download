"use strict"

window.addEventListener('load', () => {

  let link_phoca_downloads = document.createElement('a');
  link_phoca_downloads.href = 'https://saude.rr.gov.br/administrator/index.php?option=com_phocadownload&view=phocadownloadfile&layout=edit';
  link_phoca_downloads.textContent = 'Phoca';
  link_phoca_downloads.classList.add('brand');
  link_phoca_downloads.style.marginLeft = '1px';

  document.querySelector('#sp-pagebuiler-menu').appendChild(link_phoca_downloads);

});