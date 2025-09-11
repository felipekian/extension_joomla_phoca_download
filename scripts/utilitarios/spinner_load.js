// Aguarda o evento de carregamento completo da página
setTimeout(function () {
  // Encontra e remove o spinner quando a página estiver totalmente carregada
  const spinner = document.getElementById('loading-spinner');
  if (spinner) {
    spinner.remove();
  }
}, 5000);



// Cria o spinner e o adiciona à página imediatamente
function addSpinner() {

  // Cria a div para a sobreposição
  const overlay = document.createElement('div');
  overlay.id = 'loading-spinner';
  Object.assign(overlay.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '9999'
  });

  // Cria o elemento do spinner (usando CSS puro para um círculo giratório)
  const spinner = document.createElement('div');
  Object.assign(spinner.style, {
    border: '6px solid #f3f3f3',
    borderTop: '6px solid #3498db',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite'
  });

  // Adiciona a animação de rotação ao body (ou a um stylesheet)
  const style = document.createElement('style');
  style.innerHTML = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
  document.head.appendChild(style);

  // Adiciona o spinner à sobreposição e a sobreposição ao corpo do documento
  overlay.appendChild(spinner);
  document.body.appendChild(overlay);
}

addSpinner();