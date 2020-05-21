"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var typeorm_1 = require("typeorm");
var usuario_1 = __importDefault(require("./rutas/usuario"));
var curso_1 = __importDefault(require("./rutas/curso"));
var administrador_1 = __importDefault(require("./rutas/administrador"));
var compra_1 = __importDefault(require("./rutas/compra"));
var app = express_1.default();
typeorm_1.createConnection();
app.set("port", 4000);
app.use(cors_1.default());
app.use(express_1.default.json());
app.listen(app.get("port"), function () {
    console.log("Escuchando en el puerto " + app.get("port"));
});
app.use(usuario_1.default);
app.use(curso_1.default);
app.use(administrador_1.default);
app.use(compra_1.default);
