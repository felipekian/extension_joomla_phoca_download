"use strict"

window.addEventListener('load', () => {

  if (!document.querySelector('#sp-pagebuiler-menu')) return;


  /* Uploads page */
  let link_phoca_downloads_uploads = document.createElement('a')
  link_phoca_downloads_uploads.href = 'https://saude.rr.gov.br/administrator/index.php?option=com_phocadownload&view=phocadownloadfile&layout=edit';
  link_phoca_downloads_uploads.textContent = 'Upload';
  link_phoca_downloads_uploads.title = 'Phoca Downloads Uploads Files';
  link_phoca_downloads_uploads.classList.add('brand');
  link_phoca_downloads_uploads.style.marginLeft = '1px';

  document.querySelector('#sp-pagebuiler-menu').appendChild(link_phoca_downloads_uploads);


  /* Listagem */
  let link_phoca_downloads_lists = document.createElement('a')
  link_phoca_downloads_lists.href = 'https://saude.rr.gov.br/administrator/index.php?option=com_phocadownload&view=phocadownloadfiles';
  link_phoca_downloads_lists.textContent = 'List';
  link_phoca_downloads_lists.title = 'Phoca Downloads List Page';
  link_phoca_downloads_lists.classList.add('brand');
  link_phoca_downloads_lists.style.marginLeft = '1px';

  document.querySelector('#sp-pagebuiler-menu').appendChild(link_phoca_downloads_lists);

});