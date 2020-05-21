"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuario_1 = require("../controladores/usuario");
var router = express_1.Router();
router.route("/usuarios").get(usuario_1.obtenerUsuarios).post(usuario_1.crearUsuario);
router
    .route("/usuarios/:id")
    .get(usuario_1.obtenerUsuario)
    .put(usuario_1.actualizar)
    .delete(usuario_1.eliminar);
router.route("/usuarios/:id/compras").post(usuario_1.agregarCompra);
exports.default = router;
