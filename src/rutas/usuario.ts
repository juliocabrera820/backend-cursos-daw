import { Router } from "express";
import {
  obtenerUsuarios,
  crearUsuario,
  obtenerUsuario,
  actualizar,
  eliminar,
  agregarTarjeta,
  agregarCompra,
} from "../controladores/usuario";

const router = Router();

router.route("/usuarios").get(obtenerUsuarios).post(crearUsuario);
router
  .route("/usuarios/:id")
  .get(obtenerUsuario)
  .put(actualizar)
  .delete(eliminar);
router.route("/usuarios/:id/tarjetas").post(agregarTarjeta);
router.route("/usuarios/:id/compras").post(agregarCompra);

export default router;