import { Router } from "express";
import { obtenerTarjetas } from "../controladores/tarjeta";
const router = Router();

router.route("/tarjetas").get(obtenerTarjetas);
export default router;
