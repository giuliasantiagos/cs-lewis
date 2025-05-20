var formularioModel = require("../models/formularioModel");

/*function recuperarDados(req, res) {
    var selectGenero = req.body.selectGeneroServer;
    var qtdLidos = req.body.qtdLidosServer;

    if (selectGenero == undefined) {
        res.status(400).send("Seu selectGenero está undefined!");
    } else if(qtdLidos == undefined){
        res.status(400).send("Seu qtdLidos está undefined!");
    } else {

        formularioModel.recuperarDados(selectGenero, qtdLidos)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            selectGenero: resultadoAutenticar[0].selectGenero,
                            qtdLidos: resultadoAutenticar[0].qtdLidos
                        });

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Quantidade de livros lidos inválido(s)");
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

}
*/

function enviar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var selectGenero = req.body.selectGeneroServer;
    var qtdLidos = req.body.qtdLidosServer;

    if (selectGenero == undefined) {
        res.status(400).send("selectGenero está undefined!");
    } else if (qtdLidos == undefined) {
        res.status(400).send("qtdLidos está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        formularioModel.enviar(selectGenero, qtdLidos)
            .then(
                function (resultado) {
                    res.json(resultado);
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


module.exports = {
    enviar
    //recuperarDados
}