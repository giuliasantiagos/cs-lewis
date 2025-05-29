var indicacaoModel = require("../models/indicacaoModel");

function listarKPI(req, res) {
    var idUsuario = req.params.idUsuario;
    console.log(idUsuario)

    formularioModel.listarKPI(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length >= 0) {
                    res.status(200).json(resultado);
                    // Aqui checar o porquê dele estar voltando como requisição e não os dados
                    
                } else {
                    res.status(403).send("Quantidade de informações inválida(s)");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar as KPIs! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    listarKPI
}