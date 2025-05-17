// Array para armazenar usuários cadastrados
let listaRespostasFormulario = [];

function enviar(){

  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo

var varLivro1 = livro1.value;
var varLivro2 = livro2.value;
var varLivro3 = livro3.value;
var varLivro4 = livro4.value;
var varLivro5 = livro5.value;
var varLivro6 = livro6.value;
var varLivro7 = livro7.value;
var varLivro8 = livro8.value;
var varLivro9 = livro9.value;
var varLivro10 = livro10.value;
var varLivro11 = livro11.value;
var varLivro12 = livro12.value;
var varLivro13 = livro13.value;
var varLivro14 = livro14.value;
var varLivro15 = livro15.value;
var varLivro16 = livro16.value;
var varLivro17 = livro17.value;
var varLivro18 = livro18.value;
var varLivro19 = livro19.value;
var varLivro20 = livro20.value;
var varSelectGenero = select_genero.value;


  // Enviando o valor da nova input
  fetch("/formularios/enviar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      livro1Server: varLivro1,
      livro2Server: varLivro2,
      livro3Server: varLivro3,
      livro4Server: varLivro4,
      livro5Server: varLivro5,
      livro6Server: varLivro6,
      livro7Server: varLivro7,
      livro8Server: varLivro8,
      livro9Server: varLivro9,
      livro10Server: varLivro10,
      livro11Server: varLivro11,
      livro12Server: varLivro12,
      livro13Server: varLivro13,
      livro14Server: varLivro14,
      livro15Server: varLivro15,
      livro16Server: varLivro16,
      livro17Server: varLivro17,
      livro18Server: varLivro18,
      livro19Server: varLivro19,
      livro20Server: varLivro20,
      selectGeneroServer: varSelectGenero
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        cardErro.style.display = "block";

        mensagem_erro.innerHTML =
          "Formulário preenchido com sucesso!";

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