var formularioModel = require("../models/formularioModel");

function recuperarDados(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(idUsuario)

    formularioModel.recuperarDados(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length >= 0) {
                    res.status(200).json(resultado);
                    // Aqui checar o porquê dele estar voltando como requisição e não os dados
                    
                } else {
                    res.status(403).send("Quantidade de livros lidos inválida(s)");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o gráfico! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizarGrafico(req, res) {
    var novaQtdLidos = req.body.qtdLidosServer;
    var idUsuario = req.params.idUsuario;
    console.log('nova qtd: ', novaQtdLidos);


    avisoModel.atualizarGrafico(novaQtdLidos, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}


function enviar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var selectGenero = req.body.selectGeneroServer;
    var qtdLidos = req.body.qtdLidosServer;
    var idUsuario = req.body.idUsuario;


    if (selectGenero == undefined) {
        res.status(400).send("selectGenero está undefined!");
    } else if (qtdLidos == undefined) {
        res.status(400).send("qtdLidos está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        formularioModel.enviar(selectGenero, qtdLidos, idUsuario)
            .then(
                function (resultado) {
                    res.json({
                        qtdLidos: qtdLidos,
                        selectGenero: selectGenero
                    });
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o formulário! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listarGenero(req, res){
    formularioModel.listarGenero()
    .then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        } else{
            res.status(204).send("Nenhum resultado encontrado.");
        }
    }) 
    .catch(function (erro){
        console.log(erro);
        console.log('Houve um erro ao buscar os gêneros! ', erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}


module.exports = {
    enviar,
    atualizarGrafico,
    recuperarDados,
    listarGenero
}