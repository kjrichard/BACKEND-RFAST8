const { Router } = require("express");
const primeraInfanciaController = require("../controllers/primera-infancia.controller");

const router = Router();

router.post("/test", primeraInfanciaController.prueba);

module.exports = router;
