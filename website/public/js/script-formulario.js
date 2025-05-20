// Array para armazenar usuários cadastrados
let listaRespostasCadastradas = [];

function enviar() {

  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo

  var selectGeneroVar = select_genero.value;
  var qtdLidosVar = ipt_qtd_lidos.value;

  // Verificando se há algum campo em branco
  if (qtdLidosVar == "") {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
      "(Mensagem de erro para campo em branco)";

    finalizarAguardar();
    return false;
  } else {
    setInterval(sumirMensagem, 5000);
  }

  // Verificando se o número é válido:
  if (qtdLidosVar < 0 || qtdLidosVar > 34) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
      "(Mensagem de erro para quantidade de livros inválida.)";
    finalizarAguardar();
    return false;
  } else {
    setInterval(sumirMensagem, 5000);
  }

  // Enviando o valor da nova input
  fetch("/formularios/enviar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      selectGeneroServer: selectGeneroVar,
      qtdLidosServer: qtdLidosVar
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        cardErro.style.display = "block";

        mensagem_erro.innerHTML =
          "Formulário realizado com sucesso! Redirecionando para tela de dashboards...";

        setTimeout(() => {
          window.location = "./dashboard.html";
        }, "2000");

        limparFormulario();
        finalizarAguardar();
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