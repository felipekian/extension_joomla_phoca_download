"use strict"

const meusModelos = [
  { id: "21171179", descricao: "Editais e Termos 2026" }
];

function injetarDatalistControl() {
    // 1. Tenta localizar o campo (verifique se o ID no seu SEI é 'selSerie' ou 'txtSerie')
    const inputSEI = document.querySelector('#txtProtocoloDocumentoTextoBase');
    
    // Se o campo existe e ainda não tem o datalist associado
    if (inputSEI && !document.getElementById('lista-modelos-sei-custom-joomla-control')) {
        
        const datalist = document.createElement('datalist');
        datalist.id = 'lista-modelos-sei-custom-joomla-control';

        meusModelos.forEach(modelo => {
            const opcao = document.createElement('option');
            // Dica: Colocando a descrição no 'value', o usuário busca pelo nome. 
            // Precisaremos de um evento para trocar pelo ID ao selecionar.
            opcao.value = `${modelo.descricao} (${modelo.id})`; 
            opcao.dataset.id = modelo.id;
            datalist.appendChild(opcao);
        });

        document.body.appendChild(datalist);
        inputSEI.setAttribute('list', 'lista-modelos-sei-custom-joomla-control');
        inputSEI.setAttribute('autocomplete', 'off');
        inputSEI.placeholder = 'Pesquise por nome ou ID...';
        inputSEI.style.width = '200px';
        inputSEI.type = 'search';
        
        // Listener para converter o nome selecionado no ID numérico final
        inputSEI.addEventListener('change', function() {
            const selecionado = meusModelos.find(m => `${m.descricao} (${m.id})` === this.value);
            if (selecionado) {
                this.value = selecionado.id;
            }
        });
        
        console.log("Datalist injetado com sucesso!");
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