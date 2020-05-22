"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var administrador_1 = require("../controladores/administrador");
var router = express_1.Router();
router
    .route("/administradores")
    .get(administrador_1.obtenerAdministradores)
    .post(administrador_1.crearAdministrador);
router.route("/administradores/:correo").get(administrador_1.buscarPorCorreo);
exports.default = router;
