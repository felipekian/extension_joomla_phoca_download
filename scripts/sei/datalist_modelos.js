"use strict"

const meusModelos = [
  { id: "21171179", descricao: "Editais e Termos 2026" },

  { id: "21933596", descricao: "Sintese de Ata 2026" },
  { id: "17353122", descricao: "Sintese de Ata 2025" },

  { id: "22008707", descricao: "Resposta Vinculação SEGOD" }
  //   { id: "", descricao = "" },

];

function injetarDatalistControl() {

  /* clica no radio de selecionar modelo */
  const radioModelo = document.querySelector('#optProtocoloDocumentoTextoBase');

  if (radioModelo) radioModelo.click();

  const inputOriginal = document.querySelector('#txtProtocoloDocumentoTextoBase');

  // Só prossegue se o input existir e ainda não tivermos injetado nosso controle
  if (inputOriginal && !inputOriginal.dataset.customControlAtivo) {

    // 1. Criar o Datalist (se não existir)
    if (!document.getElementById('lista-modelos-sei-custom-joomla-control')) {
      const datalist = document.createElement('datalist');
      datalist.id = 'lista-modelos-sei-custom-joomla-control';
      meusModelos.forEach(modelo => {
        const opcao = document.createElement('option');
        opcao.value = `${modelo.descricao} (${modelo.id})`;
        datalist.appendChild(opcao);
      });
      document.body.appendChild(datalist);
    }

    // 2. CLONAR o input para remover TODOS os event listeners do SEI
    const novoInput = inputOriginal.cloneNode(true);

    // 3. Limpar atributos de bloqueio no clone
    novoInput.removeAttribute('onkeypress');
    novoInput.removeAttribute('oninput');
    novoInput.removeAttribute('onkeydown');
    novoInput.removeAttribute('onkeyup');
    novoInput.onkeypress = null;
    novoInput.oninput = null;

    // 4. Configurações de busca
    novoInput.setAttribute('list', 'lista-modelos-sei-custom-joomla-control');
    novoInput.setAttribute('autocomplete', 'off');
    novoInput.setAttribute('pattern', '\\d+');
    novoInput.type = 'search'; // 'search' às vezes buga o datalist em alguns browsers
    novoInput.dataset.customControlAtivo = "true"; // Marca para o Observer não repetir
    novoInput.placeholder = 'Pesquise por nome ou ID...';
    novoInput.style.width = '200px';

    // 5. Bloquear que outros scripts do SEI capturem teclas neste novo input
    novoInput.addEventListener('keydown', (e) => e.stopPropagation(), true);
    novoInput.addEventListener('keypress', (e) => e.stopPropagation(), true);

    // 6. Listener para converter seleção em ID
    novoInput.addEventListener('change', function () {
      const selecionado = meusModelos.find(m => `${m.descricao} (${m.id})` === this.value);
      if (selecionado) {
        this.value = selecionado.id;
      }
    });

    // 7. Substituir o original pelo clone "limpo" no DOM
    inputOriginal.parentNode.replaceChild(novoInput, inputOriginal);

    console.log("Input resetado e Datalist injetado!");
  }
}

// 2. Configura o Observador para detectar mudanças dinâmicas
const observerDatalistControl = new MutationObserver((mutations) => {
  injetarDatalistControl();
});

// Começa a observar o corpo da página e subelementos
observerDatalistControl.observe(document.body, {
  childList: true,
  subtree: true
});

// Executa uma vez no início caso já tenha carregado
injetarDatalistControl();