"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tarjeta_1 = require("../controladores/tarjeta");
var router = express_1.Router();
router.route("/tarjetas").get(tarjeta_1.obtenerTarjetas);
exports.default = router;
