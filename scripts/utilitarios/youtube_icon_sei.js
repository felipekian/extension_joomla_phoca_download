"use strict"

const linkFavicon = document.querySelector('link[rel="shortcut icon"]');

if(linkFavicon) {
    linkFavicon.href = 'https://sei.rr.gov.br/sei/favicon/favicon.ico';
}

setTimeout(() => {
    if (document.title.trim().toLowerCase() === "youtube") {
      document.title = "SEI! tube";
    }
}, 5000);