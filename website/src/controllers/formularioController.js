var formularioModel = require("../models/formularioModel");

function enviar(req, res) {
    var selectGenero = req.body.selectGeneroServer;
    var qtdLidos = req.body.qtdLidosServer;
    var idUsuario = req.body.idUsuario;


    if (selectGenero == undefined) {
        res.status(400).send("selectGenero está undefined!");
    } else if (qtdLidos == undefined) {
        res.status(400).send("qtdLidos está undefined!");
    } else {
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


//////////// Listar Qtd ////////////
function listarQtd(req, res){
    var idUsuario = req.params.idUsuario;
    formularioModel.listarQtd(idUsuario)
    .then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        } else{
            res.status(204).send("Nenhum resultado encontrado.");
        }
    }) 
    .catch(function (erro){
        console.log(erro);
        console.log('Houve um erro ao buscar as qtds! ', erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}



//////////// Atualizar Qtd ////////////
function atualizarQtd(req, res){
    var novaQtdLidos = req.body.qtdLidosServer;
    var idUsuario = req.params.idUsuario;
    console.log('nova qtd: ', novaQtdLidos);


    avisoModel.atualizarQtd(novaQtdLidos, idUsuario)
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



//////////// Listar Gênero ////////////
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
    listarQtd,
    atualizarQtd,
    listarGenero
}