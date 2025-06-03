b_usuario.innerHTML = sessionStorage.NOME_USUARIO;


///////// LISTAR QTD /////////

function listarQtd(){
    let idUsuario = sessionStorage.ID_USUARIO;
    console.log(idUsuario);
    

    fetch(`/formularios/listarQtd/${idUsuario}`)
    .then(function (resposta){
        if(resposta.ok){
            resposta.json().then(function (resposta){
                console.log('Dados das qtds: ', resposta);
                plotarGraficoQtd(resposta, idUsuario);
                
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


function plotarGraficoQtd(resposta, idUsuario) {
    console.log("plotarGrafico");
    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = ['Lidos', 'Não lidos'];
    let dados = [];

    // Criando estrutura para plotar gráfico - dados
    const config = {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: '',
                data: dados,
                backgroundColor: [
                    'rgb(52,23,12)',
                    'rgb(164,57,27)'
                ],
                borderColor: [
                    'rgb(52,23,12)',
                    'rgb(164,57,27)'
                ],
                borderWidth: 1
            }]
        },

        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Quantidade de livros lidos',
                    font: {
                        size: 30
                    },
                    padding: {
                        top: 20,
                        bottom: 20
                    }
                }
            }
        }
    };

    config.data.datasets[0].data.push(resposta[0].qtdLidos);
    config.data.datasets[0].data.push(34-(resposta[0].qtdLidos));

    console.log("resposta:", )
    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    new Chart(
        document.getElementById(`myChartCanvas`),
        config
    );

}



///////// LISTAR GÊNERO /////////

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
            plugins: {
                title: {
                    display: true,
                    text: 'Gêneros literários mais amados pelos usuários do C.S Livros',
                    font: {
                        size: 20
                    },
                    padding: {
                        top: 20,
                        bottom: 20
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

    new Chart(
        document.getElementById(`graficoGenerosCanvas`),
        config
    );

}