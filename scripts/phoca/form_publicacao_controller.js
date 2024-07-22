"use strict"

let title_input_phoca = document.querySelector('#jform_title');
let category_input_phoca = document.querySelector('#jform_catid_chzn > a > span');
let filename_input_phoca = document.querySelector('#jform_filename');


const CONSTANTES = {

  /******************************************************** 
          URL de upload da categoria 
  *********************************************************/
  URL_PHOCA_FILES_UPLOAD: 'https://saude.rr.gov.br/administrator/index.php?option=com_phocadownload&view=phocadownloadmanager&manager=file&tmpl=component&field=jform_filename&folder='

}


const UtilitariosFormPublicacao = {


  verificar_se_titulo_tem_match_esperado: function (titleInput, expected) {

    return titleInput.toLowerCase().indexOf(expected.toLowerCase()) > 0;

  },


  get_numero_e_ano_do_documento: function (title) {

    // deepcode ignore GlobalReplacementRegex: <please specify a reason of ignoring this>
    let split_title = title.replace(' - ', ' ').replace('/', ' ').trim().split(' ');
    let tam_split_title = split_title.length;
    let numero_documento = split_title[tam_split_title - 2];
    let ano = split_title[tam_split_title - 1];
    return [numero_documento, ano];

  },


  setCategoria: function (categoria) {

    let category_input = document.querySelector('#jform_catid');
    let options_category = [...category_input.options];

    for (let i = 0; i < options_category.length; i++) {
      if (options_category[i].innerText == categoria) {
        options_category[i].selected = true;
        break;
      }
    }

    category_input_phoca.innerHTML = categoria;
    category_input_phoca.classList.add("result-selected");
    category_input_phoca.classList.add("highlighted");

  },


  setFileName: function (filename) {

    // deepcode ignore OverwriteAssignment: <please specify a reason of ignoring this>
    filename_input_phoca.value = '';
    filename_input_phoca.value = filename;

  },


  abrirSelectFileNameURL: function (path_to_upload = '') {

    window.open(`${CONSTANTES.URL_PHOCA_FILES_UPLOAD}${path_to_upload}`, '__blank');

  }

}


const Cotacao = {

  handle: function (title) {

    if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'modelo de comunicado de cotação')) {
      this.comunicado(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'modelo de proposta de cotação')) {
      this.proposta(title);
    }

  },

  comunicado: function (title) {
    let split_title = title.replace(' - ', ' ').trim().split(' ');
    let tam_split_title = split_title.length;

    let ano = split_title[tam_split_title - 2];
    let numero_documento = split_title[tam_split_title - 1];

    let categoria = `:: CSL - :: Pregões - :: Avisos e Comunicados - :: Avisos e Comunicados ${ano} - :: Comunicado de Cotação ${ano}`;

    let filename = `csl/cotacao_${ano}/COMUNICADODECOTACAO-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/cotacao_${ano}`);

  },

  proposta: function (title) {

    // deepcode ignore GlobalReplacementRegex: <please specify a reason of ignoring this>
    let split_title = title.replace(' - ', ' ').trim().split(' ');
    let tam_split_title = split_title.length;

    let ano = split_title[tam_split_title - 2];
    let numero_documento = split_title[tam_split_title - 1];

    let categoria = `:: CSL - :: Pregões - :: Avisos e Comunicados - :: Avisos e Comunicados ${ano} - :: Comunicado de Cotação ${ano}`;
    let filename = `csl/cotacao_${ano}/PROPOSTADECOTACAO-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);

  }

}


const Editais = {

  handle: function (title) {

    if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'errata do aviso de licitação')) {
      this.errata_aviso(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'aviso de licitação')) {
      this.edital_aviso(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'edital de licitação')) {
      this.edital_propriamente_dito(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'minuta de contrato de licitação')) {
      this.minuta(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'planilha estimativa de licitação')) {
      this.planilha_estimativa(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'termo de referência de licitação')) {
      this.termo_referencia(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'nota explicativa de licitação')) {
      this.nota_explicativa(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'esclarecimentos de licitação')) {
      this.esclarecimentos(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'informativo de licitação')) {
      this.informativo(title);
    }

  },

  errata_aviso: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/ERRATA DO AVISO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/editaisetermos_${ano}`);
  },

  edital_aviso: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/AVISO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/editaisetermos_${ano}`);
  },

  edital_propriamente_dito: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/EDITAL DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  },

  minuta: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/MINUTA DE CONTRATO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  },

  planilha_estimativa: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/PLANILHA ESTIMATIVA DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  },

  termo_referencia: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/TERMO DE REFERENCIA DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  },

  nota_explicativa: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/NOTA EXPLICATIVA DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  },

  esclarecimentos: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/ESCLARECIMENTOS DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  },

  informativo: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/INFORMATIVO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  }

}


const ReaberturaEditais = {

  handle: function (title) {

    if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'aviso de licitação - reabertura')) {
      this.aviso_reabertura(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'edital de licitação - reabertura')) {
      this.edital_reabertura(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'minuta de contrato de licitação - reabertura')) {
      this.minuta_reabertura(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'planilha estimativa de licitação - reabertura')) {
      this.planilha_estimativa_reabertura(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'termo de referência de licitação - reabertura')) {
      this.termo_de_referencia_reabertura(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'nota explicativa de licitação - reabertura')) {
      this.nota_explicativa_reabertura(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'mapa de licitação - reabertura')) {
      this.mapa_reabertura(title);
    }

  },

  aviso_reabertura: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/AVISO DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;
    //let filename = `csl/editaisetermos_${ano}/reabertura-${numero_documento}-${ano}/AVISO DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/editaisetermos_${ano}`);
  },

  edital_reabertura: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/EDITAL DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;
    //let filename = `csl/editaisetermos_${ano}/reabertura-${numero_documento}-${ano}/EDITAL DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  },

  minuta_reabertura: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/MINUTA DE CONTRATO DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;
    //let filename = `csl/editaisetermos_${ano}/reabertura-${numero_documento}-${ano}/MINUTA DE CONTRATO DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  },

  planilha_estimativa_reabertura: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/PLANILHA ESTIMATIVA DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;
    //let filename = `csl/editaisetermos_${ano}/reabertura-${numero_documento}-${ano}/PLANILHA ESTIMATIVA DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  },

  termo_de_referencia_reabertura: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/TERMO DE REFERENCIA DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;
    //let filename = `csl/editaisetermos_${ano}/reabertura-${numero_documento}-${ano}/TERMO DE REFERENCIA DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  },

  nota_explicativa_reabertura: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/NOTA EXPLICATIVA REABERTURA-PERP-${numero_documento}-${ano}.pdf`;
    //let filename = `csl/editaisetermos_${ano}/reabertura-${numero_documento}-${ano}/NOTA EXPLICATIVA REABERTURA-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  },

  mapa_reabertura: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/MAPA DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;
    //let filename = `csl/editaisetermos_${ano}/reabertura-${numero_documento}-${ano}/MAPA DE LICITACAO REABERTURA-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  }


}


const RepublicacaoEditais = {

  handle: function (title) {

    if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'aviso de licitação - republicação')) {
      this.aviso_republicacao(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'edital de licitação - republicação')) {
      this.edital_republicacao(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'minuta de contrato de licitação - republicação')) {
      this.minut_republicacao(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'planilha estimativa de licitação - republicação')) {
      this.planilha_estimativa_republicacao(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'termo de referência de licitação - republicação')) {
      this.termo_de_referencia_republicacao(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'adendo de licitação - republicação')) {
      this.adendo_republicacao(title);
    }
   
    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'nota explicativa de licitação - republicação')) {
      this.nota_explicativa_republicacao(title);
    }

  },

  aviso_republicacao: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/AVISO DE LICITACAO REPUBLICACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/editaisetermos_${ano}`);
  },

  edital_republicacao: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/EDITAL DE LICITACAO REPUBLICACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  },

  minut_republicacao: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/MINUTA DE CONTRATO DE LICITACAO REPUBLICACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  },

  planilha_estimativa_republicacao: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/PLANILHA ESTIMATIVA DE LICITACAO REPUBLICACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  },

  termo_de_referencia_republicacao: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/TERMO DE REFERENCIA DE LICITACAO REPUBLICACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  },

  adendo_republicacao: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/ADENDO DE LICITACAO REPUBLICACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  },
  
  nota_explicativa_republicacao: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Editais e Termos - :: Editais e Termos ${ano}`;

    let filename = `csl/editaisetermos_${ano}/NOTA EXPLICATIVA DE LICITACAO REPUBLICACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  }

}


const Resultados = {

  handle: function (title) {

    if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'errata resultado de licitação')) {
      this.errata(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'errata de resultado parcial de licitação')) {
      this.errata_parcial(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'resultado complementar de licitação')) {
      this.complementar(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'resultado de licitação fracassada')) {
      this.fracassada(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'resultado de licitação parcial')) {
      this.parcial(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'resultado de licitação retificado')) {
      this.retificado(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'resultado de licitação')) {
      this.resultado_propriamente_dito(title);
    }

  },

  resultado_propriamente_dito: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
    let filename = `csl/resultadosesinteses_${ano}/RESULTADO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/resultadosesinteses_${ano}`);
  },

  parcial: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
    let filename = `csl/resultadosesinteses_${ano}/RESULTADO DE LICITACAO PARCIAL-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/resultadosesinteses_${ano}`);
  },

  retificado: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
    let filename = `csl/resultadosesinteses_${ano}/RESULTADO DE LICITACAO RETIFICADO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/resultadosesinteses_${ano}`);
  },

  errata: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
    let filename = `csl/resultadosesinteses_${ano}/ERRATA RESULTADO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/resultadosesinteses_${ano}`);
  },

  errata_parcial: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
    let filename = `csl/resultadosesinteses_${ano}/ERRATA RESULTADO PARCIAL DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/resultadosesinteses_${ano}`);
  },

  complementar: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
    let filename = `csl/resultadosesinteses_${ano}/RESULTADO DE LICITACAO COMPLEMENTAR-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/resultadosesinteses_${ano}`);
  },

  fracassada: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
    let filename = `csl/resultadosesinteses_${ano}/RESULTADO DE LICITACAO FRACASSADA-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/resultadosesinteses_${ano}`);
  }

}


const Sinteses = {

  handle: function (title) {

    if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'errata de síntese parcial de licitação registro de preços')) {
      this.errata_parcial(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'errata síntese de licitação registro de preços')) {
      this.errata(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'síntese de licitação registro de preços')) {
      this.sintese_propriamente_dita(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'síntese parcial de licitação registro de preços')) {
      this.parcial(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'síntese de licitação complementar registro de preços')) {
      this.complementar(title);
    }

  },

  sintese_propriamente_dita: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
    let filename = `csl/resultadosesinteses_${ano}/SINTESE DE LICITACAO REGISTRO PRECOS-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/resultadosesinteses_${ano}`);

  },

  errata: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
    let filename = `csl/resultadosesinteses_${ano}/ERRATA SINTESE DE LICITACAO REGISTRO PRECOS-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/resultadosesinteses_${ano}`);
  },

  errata_parcial: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
    let filename = `csl/resultadosesinteses_${ano}/ERRATA SINTESE PARCIAL DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/resultadosesinteses_${ano}`);
  },

  parcial: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
    let filename = `csl/resultadosesinteses_${ano}/SINTESE PARCIAL DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/resultadosesinteses_${ano}`);
  },

  complementar: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Resultados e Sínteses - :: Resultados e Sínteses ${ano}`;
    let filename = `csl/resultadosesinteses_${ano}/SINTESE DE LICITACAO COMPLEMENTAR REGISTRO PRECOS-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/resultadosesinteses_${ano}`);
  }

}


const Avisos = {

  handle: function (title) {

    if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'errata - aviso de licitação')) {
      this.errata(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'aviso de adiamento')) {
      this.adiamento(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'aviso de revogação')) {
      this.revogacao(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'tornar sem efeito - aviso de licitação')) {
      this.tornar_sem_efeito(title);
    }

  },

  adiamento: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Avisos e Comunicados - :: Avisos e Comunicados ${ano}`;
    let filename = `csl/avisosecomunicados_${ano}/AVISO DE ADIAMENTO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/avisosecomunicados_${ano}`);
  },

  revogacao: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Avisos e Comunicados - :: Avisos e Comunicados ${ano}`;
    let filename = `csl/avisosecomunicados_${ano}/AVISO DE REVOGACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/avisosecomunicados_${ano}`);
  },

  tornar_sem_efeito: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Avisos e Comunicados - :: Avisos e Comunicados ${ano}`;
    let filename = `csl/avisosecomunicados_${ano}/TORNAR SEM EFEITO AVISO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/avisosecomunicados_${ano}`);
  },

  errata: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Avisos e Comunicados - :: Avisos e Comunicados ${ano}`;
    let filename = `csl/avisosecomunicados_${ano}/ERRATA_AVISO DE LICITACAO_PERP_${numero_documento}_${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/avisosecomunicados_${ano}`);
  }

}


const Comunicados = {

  handle: function (title) {

    if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'comunicado de licitação')) {
      this.comunicado(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'comunicado de suspensão de licitação')) {
      this.comunicadoSuspensao(title);
    }

  },

  comunicado: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Avisos e Comunicados - :: Avisos e Comunicados ${ano}`;
    let filename = `csl/avisosecomunicados_${ano}/COMUNICADO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/avisosecomunicados_${ano}`);

  },


  comunicadoSuspensao: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Pregões - :: Avisos e Comunicados - :: Avisos e Comunicados ${ano}`;
    let filename = `csl/avisosecomunicados_${ano}/COMUNICADO SUSPENSAO DE LICITACAO-PERP-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/avisosecomunicados_${ano}`);

  }

}


const Credenciamentos = {

  handle: function (title) {

    if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'credenciamento público')) {
      this.credenciamento(title);
    }

  },

  credenciamento: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Credenciamento - :: Credenciamento ${ano}`;

    UtilitariosFormPublicacao.setCategoria(categoria);

    if (split_title[1].toLowerCase() === 'aviso') {
      let filename = `csl/credenciamento${ano}/aviso_credenciamento-${numero_documento}-${ano}.pdf`;
      UtilitariosFormPublicacao.setFileName(filename);
      UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/credenciamento${ano}`);
    }

    if (split_title[1].toLowerCase() === 'edital') {
      let filename = `csl/credenciamento${ano}/edital_credenciamento-${numero_documento}-${ano}.pdf`;
      UtilitariosFormPublicacao.setFileName(filename);
    }

    if (split_title[1].toLowerCase() === 'minuta') {
      let filename = `csl/credenciamento${ano}/minuta_credenciamento-${numero_documento}-${ano}.pdf`;
      UtilitariosFormPublicacao.setFileName(filename);
    }

    if (split_title[1].toLowerCase() === 'termo') {
      let filename = `csl/credenciamento${ano}/termo_referencia_credenciamento-${numero_documento}-${ano}.pdf`;
      UtilitariosFormPublicacao.setFileName(filename);
    }

    if (split_title[1].toLowerCase() === 'projeto') {
      let filename = `csl/credenciamento${ano}/projeto_basico_credenciamento-${numero_documento}-${ano}.pdf`;
      UtilitariosFormPublicacao.setFileName(filename);
    }

    if (split_title[1].toLowerCase() === 'errata') {
      let filename = `csl/credenciamento${ano}/errata_credenciamento-${numero_documento}-${ano}.pdf`;
      UtilitariosFormPublicacao.setFileName(filename);
    }

  }

}


const Chamamentos = {

  handle: function (title) {

    if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'chamamento público')) {
      this.chamamento(title);
    }

  },

  chamamento: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Chamamento - :: Chamamento Público ${ano}`;

    UtilitariosFormPublicacao.setCategoria(categoria);

    if (split_title[1].toLowerCase() === 'aviso') {
      let filename = `chamamentos/CHAMAMENTO_PUBLICO_AVISO-${numero_documento}-${ano}.pdf`;
      UtilitariosFormPublicacao.setFileName(filename);
      UtilitariosFormPublicacao.abrirSelectFileNameURL(`chamamentos`);
    }

    if (split_title[1].toLowerCase() === 'edital') {
      let filename = `chamamentos/CHAMAMENTO_PUBLICO_EDITAL-${numero_documento}-${ano}.pdf`;
      UtilitariosFormPublicacao.setFileName(filename);
    }

    if (split_title[1].toLowerCase() === 'minuta') {
      let filename = `chamamentos/CHAMAMENTO_PUBLICO_MINUTA-${numero_documento}-${ano}.pdf`;
      UtilitariosFormPublicacao.setFileName(filename);
    }

    if (split_title[1].toLowerCase() === 'termo') {
      let filename = `chamamentos/CHAMAMENTO_PUBLICO_TERMO_DE_REFERENCIA-${numero_documento}-${ano}.pdf`;
      UtilitariosFormPublicacao.setFileName(filename);
    }
  }

}


const CIB = {

  handle: function (title) {

    if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'resolução cib ad referendum')) {
      this.resolucoes_adreferendum(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'resolução this')) {
      this.resolucoes(title);
    }

  },

  resolucoes: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CIB - :: Resoluções - :: Resoluções CIB - ${ano}`;
    UtilitariosFormPublicacao.setCategoria(categoria);

    let filename = `cib/resolucoes_${ano}/resolucao-cib-${numero_documento}-${ano}.pdf`;
    UtilitariosFormPublicacao.setFileName(filename);
  },

  resolucoes_adreferendum: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CIB - :: Resoluções - :: Resoluções CIB - ${ano}`;
    UtilitariosFormPublicacao.setCategoria(categoria);

    let filename = `cib/resolucoes_${ano}/resolucao-cib-adreferendum-${numero_documento}-${ano}.pdf`;
    UtilitariosFormPublicacao.setFileName(filename);
  }

}


const Dispensas = {

  handle: function (title) {

    if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'aviso de dispensa de licitação')) {
      this.aviso(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'projeto básico de dispensa de licitação')) {
      this.projeto_basico(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'termo de referência de dispensa de licitação')) {
      this.termo_referencia(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'edital de dispensa de licitação')) {
      this.edital(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'mapa de cotação de dispensa de licitação')) {
      this.mapa_cotacao(title);
    }

    else if (UtilitariosFormPublicacao.verificar_se_titulo_tem_match_esperado(title, 'minuta de dispensa de licitação')) {
      this.minuta(title);
    }

  },

  aviso: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Dispensa de Licitação - :: Dispensa Licitação ${ano}`;

    let filename = `csl/avisosecomunicados_${ano}/AVISO DE DISPENSA DE LICITACAO-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
    UtilitariosFormPublicacao.abrirSelectFileNameURL(`csl/avisosecomunicados_${ano}`);
  },

  projeto_basico: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Dispensa de Licitação - :: Dispensa Licitação ${ano}`;

    let filename = `csl/dispensa${ano}/PROJETO BASICO DE DISPENSA DE LICITACAO-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  },

  termo_referencia: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Dispensa de Licitação - :: Dispensa Licitação ${ano}`;

    let filename = `csl/dispensa${ano}/TERMO DE REFERENCIA DE DISPENSA DE LICITACAO-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  },

  edital: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Dispensa de Licitação - :: Dispensa Licitação ${ano}`;

    let filename = `csl/dispensa${ano}/EDITAL DE DISPENSA DE LICITACAO-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  },

  mapa_cotacao: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Dispensa de Licitação - :: Dispensa Licitação ${ano}`;

    let filename = `csl/dispensa${ano}/MAPA DE COTACAO DE DISPENSA DE LICITACAO-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  },

  minuta: function (title) {

    const [numero_documento, ano] = UtilitariosFormPublicacao.get_numero_e_ano_do_documento(title);

    let categoria = `:: CSL - :: Dispensa de Licitação - :: Dispensa Licitação ${ano}`;

    let filename = `csl/dispensa${ano}/MINUTA DE DISPENSA DE LICITACAO-${numero_documento}-${ano}.pdf`;

    UtilitariosFormPublicacao.setCategoria(categoria);
    UtilitariosFormPublicacao.setFileName(filename);
  }

}


const Controller = {
  handle: function (title) {

    Cotacao.handle(title);

    Editais.handle(title);

    ReaberturaEditais.handle(title);

    RepublicacaoEditais.handle(title);

    Dispensas.handle(title);

    Resultados.handle(title);

    Sinteses.handle(title);

    Comunicados.handle(title);

    Avisos.handle(title);

    Credenciamentos.handle(title);

    Chamamentos.handle(title);

    CIB.handle(title);
  }

}


const MountedPublicacaoController = {

  run: function () {

    window.addEventListener('load', () => {

      title_input_phoca.addEventListener('blur', function (e) {

        Controller.handle(e.target.value);

      });

    });

  }

}


MountedPublicacaoController.run();
