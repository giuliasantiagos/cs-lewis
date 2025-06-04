var express = require("express");
var router = express.Router();

var formularioController = require("../controllers/formularioController");

router.get("/listarQtd/:idUsuario", function (req, res){
    formularioController.listarQtd(req, res);
});

router.get("/listarGenero", formularioController.listarGenero);

router.get("/listarLivro", formularioController.listarLivro);

router.post("/enviar", function (req, res) {
    formularioController.enviar(req, res);
});

module.exports = router;