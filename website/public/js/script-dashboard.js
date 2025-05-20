b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

function recuperarDados() {

    fetch("/formularios/recuperarDados", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            selectGeneroServer: selectGeneroVar,
            qtdLidosServer: qtdLidosVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.SELECT_GENERO = json.selectGenero;
                sessionStorage.QTD_LIDOS = json.qtdLidos;

            });

        } else {

            console.log("Houve um erro ao tentar realizar a dashboard!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none"
}


// Esta função *obterDadosGrafico* busca os últimos dados inseridos em tabela de medidas.
// para, quando carregar o gráfico da primeira vez, já trazer com vários dados.
// A função *obterDadosGrafico* também invoca a função *plotarGrafico*

//     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models
// function obterDadosGrafico(livros) {


//     fetch(`/formularios/obterDadosGrafico/${livros}`, { cache: 'no-store' })
//         .then(function (response) {
//             if (response.ok) {
//                 response.json().then(function (resposta) {
//                     console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
//                     resposta.reverse();

//                     plotarGrafico(resposta, livros);

//                 });
//             } else {
//                 console.error('Nenhum dado encontrado ou erro na API');
//             }
//         })
//         .catch(function (error) {
//             console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
//         });
// }

// // Esta função *plotarGrafico* usa os dados capturados na função anterior para criar o gráfico
// // Configura o gráfico (cores, tipo, etc), materializa-o na página e, 
// // A função *plotarGrafico* também invoca a função *atualizarGrafico*
// function plotarGrafico(resposta, livros) {

//     console.log('iniciando plotagem do gráfico...');

//     // Criando estrutura para plotar gráfico - labels
//     let labels = [];

//     // Criando estrutura para plotar gráfico - dados
//     let dados = {
//         labels: labels,
//         datasets: [{
//             label: 'Livros lidos',
//             data: livros,
//             fill: false,
//             borderColor: 'rgb(75, 192, 192)',
//             tension: 0.1
//         },
//         {
//             label: 'Total de livros',
//             data: 34,
//             fill: false,
//             borderColor: 'rgb(199, 52, 52)',
//             tension: 0.1
//         }]
//     };


// console.log('----------------------------------------------')
// console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
// console.log(resposta)

// // Inserindo valores recebidos em estrutura para plotar o gráfico
// for(var i = 0; i < resposta.length; i++){
//     labels.push(dados[i].label);
//   }

// console.log('----------------------------------------------')
// console.log('O gráfico será plotado com os respectivos valores:')
// console.log('Labels:')
// console.log(labels)
// console.log('Dados:')
// console.log(dados.datasets)
// console.log('----------------------------------------------')

// // Criando estrutura para plotar gráfico - config
// const config = {
//     type: 'bar',
//     data: dados,
// };

// // Adicionando gráfico criado em div na tela
// let myChart = new Chart(
//     document.getElementById(`myChartCanvas${livros}`),
//     config
// );

// setTimeout(() => atualizarGrafico(livros, dados, myChart), 2000);
//     }

