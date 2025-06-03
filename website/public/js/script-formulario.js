let listaRespostasCadastradas = [];

function enviar() {

  var selectLivroVar = select_livro.value;
  var selectGeneroVar = select_genero.value;
  var qtdLidosVar = ipt_qtd_lidos.value;
 
  if (qtdLidosVar == "") {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
      "(Mensagem de erro para campo em branco)";

    finalizarAguardar();
    return false;
  } else {
    setInterval(sumirMensagem, 5000);
  }

  if (qtdLidosVar < 0 || qtdLidosVar > 34) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
      "(Mensagem de erro para quantidade de livros inválida.)";
    finalizarAguardar();
    return false;
  } else {
    setInterval(sumirMensagem, 5000);
  }

  fetch("/formularios/enviar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      selectLivroServer: selectLivroVar,
      selectGeneroServer: selectGeneroVar,
      qtdLidosServer: qtdLidosVar,
      idUsuario: sessionStorage.ID_USUARIO,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        cardErro.style.display = "block";

        resposta.json().then(json => {
          console.log(json);
          console.log(JSON.stringify(json));
          sessionStorage.LIVROS_FAVORITOS = json.selectLivro;
          sessionStorage.QTD_LIDOS = json.qtdLidos;
          sessionStorage.GENEROS_FAVORITOS = json.selectGenero;

        mensagem_erro.innerHTML =
          "Formulário realizado com sucesso! Redirecionando para tela de dashboards...";

        setTimeout(() => {
          window.location = "./dashboard.html";
        }, "2000");


        limparFormulario();
        finalizarAguardar();
      });
      } else {
        throw "Houve um erro ao tentar realizar o formulário!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      finalizarAguardar();
    });

  return false;
}

function sumirMensagem() {
  cardErro.style.display = "none";
}