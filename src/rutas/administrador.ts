import { Router } from "express";
import {
  obtenerAdministradores,
  crearAdministrador,
  buscarPorCorreo,
} from "../controladores/administrador";
const router = Router();

router
  .route("/administradores")
  .get(obtenerAdministradores)
  .post(crearAdministrador);
router.route("/administradores/:correo").get(buscarPorCorreo);
export default router;
