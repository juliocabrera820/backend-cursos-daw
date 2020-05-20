import { Router } from "express";
import { obtenerAdministradores } from "../controladores/administrador";
const router = Router();

router.route("/administradores").get(obtenerAdministradores);
export default router;
