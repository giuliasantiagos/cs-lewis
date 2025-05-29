b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

function listarKPI() {
    console.log("listarKPI");
    console.log(sessionStorage.ID_USUARIO);
    let idUsuario = sessionStorage.ID_USUARIO;

    fetch(`/indicacoes/listarKPI/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarKPI(resposta, idUsuario);

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

function plotarKPI(resposta, idUsuario) {
    console.log('iniciando plotagem de KPIs...');
    b_qtd.innerHTML = sessionStorage.ID_USUARIO.qtdLidos;
}