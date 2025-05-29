var express = require("express");
var router = express.Router();

var indicacaoController = require("../controllers/indicacaoController");

router.get("/listarKPI/:idUsuario", function (req, res) {
    indicacaoController.listarKPI(req, res);
});

module.exports = router;