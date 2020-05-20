import { Router } from "express";
import {
  obtenerAdministradores,
  crearAdministrador,
} from "../controladores/administrador";
const router = Router();

router
  .route("/administradores")
  .get(obtenerAdministradores)
  .post(crearAdministrador);
export default router;
