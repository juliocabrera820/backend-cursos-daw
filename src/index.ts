import "reflect-metadata";
import express from "express";
import cors from "cors";
import { createConnection } from "typeorm";
import rutaUsuarios from "./rutas/usuario";
import rutaTarjetas from "./rutas/tarjeta";
import rutaCursos from "./rutas/curso";
import rutaAdministradores from "./rutas/administrador";
import rutaCompras from "./rutas/compra";

const app = express();
createConnection();
app.set("port", 4000);

app.use(cors());
app.use(express.json());

app.listen(app.get("port"), () => {
  console.log(`Escuchando en el puerto ${app.get("port")}`);
});
app.use(rutaUsuarios);
app.use(rutaTarjetas);
app.use(rutaCursos);
app.use(rutaAdministradores);
app.use(rutaCompras);
