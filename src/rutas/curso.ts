import { Router } from "express";
import {
  obtenerCursos,
  obtenerCurso,
  actualizar,
  crearCurso,
  eliminar,
} from "../controladores/curso";
const router = Router();

router.route("/cursos").get(obtenerCursos).post(crearCurso);
router.route("/cursos/:id").get(obtenerCurso).put(actualizar).delete(eliminar);
export default router;
