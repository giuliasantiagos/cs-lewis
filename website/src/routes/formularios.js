var express = require("express");
var router = express.Router();

var formularioController = require("../controllers/formularioController");

// /*router.post("/recuperarDados", function (req, res) {
//     usuarioController.recuperarDados(req, res);
// });*/

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/enviar", function (req, res) {
    formularioController.enviar(req, res);
});

module.exports = router;