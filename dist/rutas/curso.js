"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var curso_1 = require("../controladores/curso");
var router = express_1.Router();
router.route("/cursos").get(curso_1.obtenerCursos).post(curso_1.crearCurso);
router.route("/cursos/:id").get(curso_1.obtenerCurso).put(curso_1.actualizar).delete(curso_1.eliminar);
exports.default = router;
