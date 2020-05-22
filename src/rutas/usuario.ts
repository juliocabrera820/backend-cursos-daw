import { Router } from "express";
import {
  obtenerUsuarios,
  crearUsuario,
  obtenerUsuario,
  actualizar,
  eliminar,
  agregarCompra,
  buscarPorCorreo,
} from "../controladores/usuario";

const router = Router();

router.route("/usuarios").get(obtenerUsuarios).post(crearUsuario);
router
  .route("/usuarios/:id")
  .get(obtenerUsuario)
  .put(actualizar)
  .delete(eliminar);
router.route("/usuarios/:id/compras").post(agregarCompra);
router.route("/usuarios/sesion/:correo").get(buscarPorCorreo);
export default router;
