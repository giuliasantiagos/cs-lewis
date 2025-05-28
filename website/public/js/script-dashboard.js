const { options } = require("../../src/routes/formularios");
b_usuario.innerHTML = sessionStorage.NOME_USUARIO;


function exibirGraficosDoUsuario() {
    let graficos = document.querySelectorAll('.grafico');
    let idUsuario = sessionStorage.ID_USUARIO;

    div_grafico.innerHTML = `<canvas id="myChartCanvas"></canvas>
                    <div class="label-captura">
                        <p id="avisoCaptura" style="color: white"></p>
                    </div>`;
    console.log('este é o id do grafico', graficos);

    recuperarDados(graficos.id);

    if (graficos.length > 0) {
        exibirGrafico(idUsuario)
        console.log(idUsuario, 'parametros idusuario')
    }
}

function exibirGrafico(idUsuario) {
    console.log("exibirGrafico chegou o id", idUsuario);
    let todosOsGraficos = JSON.parse(sessionStorage.ID_USUARIO);

    for (i = 0; i < todosOsGraficos.length; i++) {
        // exibindo - ou não - o gráfico
        if (todosOsGraficos[i].id != idUsuario) {
            let elementoAtual = document.getElementById(`grafico${todosOsGraficos[i].id}`)
            if (elementoAtual.classList.contains("display-block")) {
                elementoAtual.classList.remove("display-block")
            }
            elementoAtual.classList.add("display-none")

        }
    }

    //exibindo - ou não - o gráfico
    let graficoExibir = document.getElementById(`div_grafico`);
    graficoExibir.classList.remove("display-none");
    graficoExibir.classList.add("display-block");

}


function recuperarDados() {
    console.log("recuperarDados");
    console.log(sessionStorage.ID_USUARIO);
    let idUsuario = sessionStorage.ID_USUARIO;

    fetch(`/formularios/recuperarDados/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGrafico(resposta, idUsuario);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (erro) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${erro}`);
        });

    return false;
}


function plotarGrafico(resposta, idUsuario) {
    console.log("plotarGrafico");
    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = ['Livros lidos', 'Livros restantes'];

    // Criando estrutura para plotar gráfico - dados
    const dados = {
        labels: labels,
        datasets: [{
            label: 'Quantidade de livros',
            backgroundColor: [
                '#F49459',
                '#4E3B28'
            ],
            data: []
        },

        ]
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta.body)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    var registro = resposta[0];
    dados.datasets[0].data.push(registro.qtdLidos);
    dados.datasets[0].data.push(34 - (registro.qtdLidos));

    console.log("resposta:", resposta)
    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    // Criando estrutura para plotar gráfico - config

    let config = {
        type: 'doughnut',
        data: dados,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Índice de livros lidos de C.S Lewis',
                    font: {
                        size: 20
                    },
                    padding: {
                        top: 5,
                        bottom: 5
                    }
                }
            }
        }
    }

    // Adicionando gráfico criado em div na tela
    let myChart = new Chart(
        document.getElementById(`myChartCanvas`),
        config
    );

}

function atualizarGrafico(idUsuario, dados, myChart) {
    console.log("atualizarGrafico");
    fetch(`/formularios/atualizarGrafico/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {

                recuperarDados(idUsuario);

                console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
                console.log(`Dados atuais do gráfico:`);
                console.log(dados);

                let avisoCaptura = document.getElementById(`avisoCaptura${idUsuario}`)
                avisoCaptura.innerHTML = ""


                if (novoRegistro[0].momento_grafico == dados.labels[dados.labels.length - 1]) {
                    console.log("---------------------------------------------------------------")
                    console.log("Como não há dados novos para captura, o gráfico não atualizará.")
                    avisoCaptura.innerHTML = "<i class='fa-solid fa-triangle-exclamation'></i> Foi trazido o dado mais atual capturado pelo sensor. <br> Como não há dados novos a exibir, o gráfico não atualizará."
                    console.log("Horário do novo dado capturado:")
                    console.log(novoRegistro[0].momento_grafico)
                    console.log("Horário do último dado capturado:")
                    console.log(dados.labels[dados.labels.length - 1])
                    console.log("---------------------------------------------------------------")
                } else {
                    // tirando e colocando valores no gráfico
                    dados.labels.shift(); // apagar o primeiro

                    dados.datasets[0].data.shift();  
                    dados.datasets[0].data.push(novoRegistro[0].qtdLidos);

                    myChart.update();
                }

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
            proximaAtualizacao = setTimeout(() => atualizarGrafico(idUsuario, dados, myChart), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

}





function listarGenero(){
    fetch(`/formularios/listarGenero`)
    .then(function (resposta){
        if(resposta.ok){
            resposta.json().then(function (livros){
                console.log('Dados dos gêneros: ', livros);
                plotarGraficoGenero(livros[0]);
                
            });
        } else{
            alert('Houve um erro ao tentar puxar os dados!');
        }

    })

    .catch(function (erro){
        console.error('#error',erro);
        alert("Erro ao tentar comunicar com o servidor.");
        
    });
    return false;
}


function plotarGraficoGenero(livros) {
    console.log("plotarGrafico");
    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = ['Suspense', 'Romance', 'Fantasia', 'Ficção científica', 'Comédia', 'Não ficção', 'Drama'];
    let generos = [livros.suspense, livros.romance, livros.fantasia, livros.ficcao_cientifica, livros.comedia, livros.nao_ficcao, livros.drama];

    // Criando estrutura para plotar gráfico - dados
    const config = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Quantidade de gêneros literários',
                data: generos,
                borderWidth: 2,
                borderRadius: 5,
                backgroundColor: [
                    'rgb(218,86,40)',
                    'rgb(52,23,12)',
                    'rgb(242,217,169)',
                    'rgb(164,57,27)',
                    'rgb(223,133,93)',
                    'rgb(217,154,92)'
                ],
                borderColor: [
                    'rgb(218,86,40)',
                    'rgb(52,23,12)',
                    'rgb(242,217,169)',
                    'rgb(164,57,27)',
                    'rgb(223,133,93)',
                    'rgb(217,154,92)'
                ],
                borderWidth: 1
            }]
        },

        options: {
            layout: {
                padding: 20
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Gêneros literários mais amados pelos usuários do C.S Livros',
                    font: {
                        size: 20
                    },
                    padding: {
                        top: 10,
                        bottom: 10
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    precision: 0
                }
            }
        }
    };

    
    console.log("resposta:", )
    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(generos.datasets)
    console.log('----------------------------------------------')


    // Adicionando gráfico criado em div na tela
    new Chart(
        document.getElementById(`graficoGenerosCanvas`),
        config
    );

}