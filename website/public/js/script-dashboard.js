b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

window.onload = exibirFormulariosDoUsuario();

function exibirFormulariosDoUsuario() {
    formularios.forEach(item => {
        document.getElementById("btnFormulario").innerHTML += `
            <button class="btn-chart" onclick="exibirFormulario(${item.fkusuario})" id="btnFormulario${item.fkusuario}">${item.descricao}</button>
            `

        document.getElementById("graficos").innerHTML += `
                <div id="grafico${item.fkusuario}" class="display-none">
                    <h3 class="tituloGraficos">
                        <span id="tituloAquario${item.fkusuario}">${item.descricao}</span>
                    </h3>
                    <div class="graph">
                        <canvas id="myChartCanvas${item.fkusuario}"></canvas>
                    </div>
                    <div class="label-captura">
                        <p id="avisoCaptura${item.fkusuario}" style="color: white"></p>
                    </div>
                </div>
            `

        obterDadosGrafico(item.fkusuario)
    });

    if (formularios.length > 0) {
        exibirFormulario(formularios[0].fkusuario)
    }

}

function exibirFormulario(fkusuario) {
        let todosOsGraficos = JSON.parse(sessionStorage.FORMULARIOS);

        for (i = 0; i < todosOsGraficos.length; i++) {
            // exibindo - ou não - o gráfico
            if (todosOsGraficos[i].id != fkusuario) {
                let elementoAtual = document.getElementById(`grafico${todosOsGraficos[i].fkusuario}`)
                if (elementoAtual.classList.contains("display-block")) {
                    elementoAtual.classList.remove("display-block")
                }
                elementoAtual.classList.add("display-none")

            }
        }

        // exibindo - ou não - o gráfico
        let graficoExibir = document.getElementById(`grafico${fkusuario}`)
        graficoExibir.classList.remove("display-none")
        graficoExibir.classList.add("display-block")

    }

/*
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
}*/


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

