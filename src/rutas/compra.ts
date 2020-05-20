import { Router } from "express";
import { obtenerCompras } from "../controladores/compra";
const router = Router();

router.route("/compras").get(obtenerCompras);
export default router;
