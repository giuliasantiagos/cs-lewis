window.onload = exibirGraficosDoUsuario();

function exibirGraficosDoUsuario() {
    let graficos = document.querySelectorAll('.grafico');

    for (var i = 0; i < graficos.length; i++) {
        graficos.innerHTML = `<canvas id="myChartCanvas${i}"></canvas>`;

        recuperarDados(i.id);

    }

    if (graficos.length > 0) {
        exibirGrafico(graficos[0].id)
    }
}

function exibirGrafico(idUsuario) {
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
    let graficoExibir = document.getElementById(`grafico${idUsuario}`);
    graficoExibir.classList.remove("display-none");
    graficoExibir.classList.add("display-block");

}


// Esta função *obterDadosGrafico* busca os últimos dados inseridos em tabela de medidas.
// para, quando carregar o gráfico da primeira vez, já trazer com vários dados.
// A função *obterDadosGrafico* também invoca a função *plotarGrafico*

//     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models

function recuperarDados() {
    console.log(sessionStorage.ID_USUARIO)
    let idUsuario = sessionStorage.ID_USUARIO;

    fetch(`/formularios/recuperarDados/${idUsuario}`) 
    .then(function(resposta){
        console.log(resposta);
        
        if (resposta.ok) {
            plotarGrafico(resposta, idUsuario);
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (erro) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${erro}`);
        });

    return false;
}

// Esta função *plotarGrafico* usa os dados capturados na função anterior para criar o gráfico
// Configura o gráfico (cores, tipo, etc), materializa-o na página e,
// A função *plotarGrafico* também invoca a função *atualizarGrafico*
function plotarGrafico(idUsuario) {

    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [{
            label: 'Umidade',
            data: [],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },
        {
            label: 'Temperatura',
            data: [],
            fill: false,
            borderColor: 'rgb(199, 52, 52)',
            tension: 0.1
        }]
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(registro.momento_grafico);
        dados.datasets[0].data.push(registro.qtdLidos);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'line',
        data: dados,
    };

    // Adicionando gráfico criado em div na tela
    let myChart = new Chart(
        document.getElementById(`myChartCanvas${idUsuario}`),
        config
    );

    setTimeout(() => atualizarGrafico(idUsuario, dados, myChart), 2000);
}