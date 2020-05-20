"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var administrador_1 = require("../controladores/administrador");
var router = express_1.Router();
router.route("/administradores").get(administrador_1.obtenerAdministradores);
exports.default = router;
