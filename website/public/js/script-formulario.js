// Array para armazenar usuários cadastrados
let listaRespostasFormulario = [];
let select = document.querySelectorAll('select');
console.log(select)

function enviar() {

    
    

  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo

  var nomeVar = ipt_nome.value;
  var emailVar = ipt_email.value;
  var senhaVar = ipt_senha.value;
  var confsenhaVar = ipt_confirme_senha.value;

  // Verificando se há algum campo em branco
  if (
    nomeVar == "" ||
    emailVar == "" ||
    senhaVar == "" ||
    confsenhaVar == ""

  ) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
      "(Mensagem de erro para todos os campos em branco)";

    finalizarAguardar();
    return false;
  } else {
    setInterval(sumirMensagem, 5000);
  }

  // Verificando se o email já foi cadastrado
  for (let i = 0; i < listaUsuariosCadastrados.length; i++) {
    if (!listaUsuariosCadastrados.includes(emailVar)) {
      console.log("E-mail válido.");
      break;
    } else {
      cardErro.style.display = "block";
      mensagem_erro.innerHTML = "(Mensagem de erro para e-mail inválido)";
      finalizarAguardar();
    }
  }

  // Verificando se o nome possui mais de uma letra:
  if (nomeVar.length <= 1) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
      "(Mensagem de erro para nome inválido.)";
    finalizarAguardar();
    return false;
  } else {
    setInterval(sumirMensagem, 5000);
  }

  // Verificando se o email é válido:
  if (!emailVar.includes('@') || !emailVar.includes('.')) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
      "(Mensagem de erro para email inválido.)";
    finalizarAguardar();
    return false;
  } else {
    setInterval(sumirMensagem, 5000);
  }

    // Verificando se a senha é válida:
  if (senhaVar.length <= 1) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
      "(Mensagem de erro para senha inválida.)";
    finalizarAguardar();
    return false;
  } else {
    setInterval(sumirMensagem, 5000);
  }

    // Verificando se a confirmação de senha é válida:
  if (senhaVar != confsenhaVar) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
      "(Mensagem de erro para senha inválida.)";
    finalizarAguardar();
    return false;
  } else {
    setInterval(sumirMensagem, 5000);
  }

  // Enviando o valor da nova input
  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      nomeServer: nomeVar,
      emailServer: emailVar,
      senhaServer: senhaVar
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        cardErro.style.display = "block";

        mensagem_erro.innerHTML =
          "Cadastro realizado com sucesso! Redirecionando para tela de login...";

        setTimeout(() => {
          window.location = "./login.html";
        }, "2000");

        limparFormulario();
        finalizarAguardar();
      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
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