var usuarioModel = require("../models/formularioModel");

function enviar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
var varLivro1  = req.body.varLivro1Server;
var varLivro2  = req.body.varLivro2Server;
var varLivro3  = req.body.varLivro3Server;
var varLivro4  = req.body.varLivro4Server;
var varLivro5  = req.body.varLivro5Server;
var varLivro6  = req.body.varLivro6Server;
var varLivro7  = req.body.varLivro7Server;
var varLivro8  = req.body.varLivro8Server;
var varLivro9  = req.body.varLivro9Server;
var varLivro10 = req.body.varLivro10Server;
var varLivro11 = req.body.varLivro11Server;
var varLivro12 = req.body.varLivro12Server;
var varLivro13 = req.body.varLivro13Server;
var varLivro14 = req.body.varLivro14Server;
var varLivro15 = req.body.varLivro15Server;
var varLivro16 = req.body.varLivro16Server;
var varLivro17 = req.body.varLivro17Server;
var varLivro18 = req.body.varLivro18Server;
var varLivro19 = req.body.varLivro19Server;
var varLivro20 = req.body.varLivro20Server;
var varSelectGenero = req.body.varSelectGeneroServer;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        formularioModel.enviar(
            varLivro1, varLivro2, varLivro3, varLivro4, varLivro5, varLivro6, varLivro7, varLivro8,
            varLivro9, varLivro10, varLivro11, varLivro12, varLivro13, varLivro14, varLivro15, varLivro16,
            varLivro17, varLivro18, varLivro19, varLivro20, varSelectGenero
        )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


module.exports = {
    enviar
}