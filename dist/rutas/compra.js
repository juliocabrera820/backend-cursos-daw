"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var compra_1 = require("../controladores/compra");
var router = express_1.Router();
router.route("/compras").get(compra_1.obtenerCompras);
exports.default = router;
