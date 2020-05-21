"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.agregarCompra = exports.eliminar = exports.actualizar = exports.obtenerUsuario = exports.crearUsuario = exports.obtenerUsuarios = void 0;
var typeorm_1 = require("typeorm");
var usuario_1 = require("../entidades/usuario");
var compra_1 = require("../entidades/compra");
exports.obtenerUsuarios = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuarios, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, typeorm_1.getRepository(usuario_1.Usuario).find({
                        relations: ["compras"],
                    })];
            case 1:
                usuarios = _a.sent();
                return [2 /*return*/, res.json(usuarios)];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, res.json({ message: error_1 })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.crearUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nombre, apellido, correo, contrasena, numero, fecha, cvc, nuevoUsuario, usuario, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, nombre = _a.nombre, apellido = _a.apellido, correo = _a.correo, contrasena = _a.contrasena, numero = _a.numero, fecha = _a.fecha, cvc = _a.cvc;
                nuevoUsuario = typeorm_1.getRepository(usuario_1.Usuario).create({
                    nombre: nombre,
                    apellido: apellido,
                    correo: correo,
                    contrasena: contrasena,
                    fecha: fecha,
                    numero: numero,
                    cvc: cvc,
                });
                return [4 /*yield*/, typeorm_1.getRepository(usuario_1.Usuario).save(nuevoUsuario)];
            case 1:
                usuario = _b.sent();
                return [2 /*return*/, res.json(usuario)];
            case 2:
                error_2 = _b.sent();
                return [2 /*return*/, res.json({ message: error_2 })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.obtenerUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, usuario, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, typeorm_1.getRepository(usuario_1.Usuario).findOne({
                        where: { id: "" + id },
                        relations: ["compras"],
                    })];
            case 2:
                usuario = _a.sent();
                return [2 /*return*/, res.json(usuario)];
            case 3:
                error_3 = _a.sent();
                return [2 /*return*/, res.json({ message: error_3 })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.actualizar = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, nombre, apellido, correo, contrasena, numero, fecha, cvc, usuario, usuarioActualizado, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, nombre = _a.nombre, apellido = _a.apellido, correo = _a.correo, contrasena = _a.contrasena, numero = _a.numero, fecha = _a.fecha, cvc = _a.cvc;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                return [4 /*yield*/, typeorm_1.getRepository(usuario_1.Usuario).findOne(id)];
            case 2:
                usuario = _b.sent();
                if (!usuario) return [3 /*break*/, 4];
                typeorm_1.getRepository(usuario_1.Usuario).merge(usuario, {
                    nombre: nombre,
                    apellido: apellido,
                    correo: correo,
                    contrasena: contrasena,
                    numero: numero,
                    fecha: fecha,
                    cvc: cvc,
                });
                return [4 /*yield*/, typeorm_1.getRepository(usuario_1.Usuario).save(usuario)];
            case 3:
                usuarioActualizado = _b.sent();
                return [2 /*return*/, res.json(usuarioActualizado)];
            case 4: return [2 /*return*/, res.json({ message: "El usuario no existe" })];
            case 5:
                error_4 = _b.sent();
                return [2 /*return*/, res.json({ message: error_4 })];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.eliminar = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, eliminado, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, typeorm_1.getRepository(usuario_1.Usuario).delete(id)];
            case 1:
                eliminado = _a.sent();
                return [2 /*return*/, res.json(eliminado)];
            case 2:
                error_5 = _a.sent();
                return [2 /*return*/, res.json({ message: error_5 })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.agregarCompra = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, nombre, descripcion, topico, duracion, lecciones, precio, usuario, compra, error_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, nombre = _a.nombre, descripcion = _a.descripcion, topico = _a.topico, duracion = _a.duracion, lecciones = _a.lecciones, precio = _a.precio;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, typeorm_1.getRepository(usuario_1.Usuario).findOne(id)];
            case 2:
                usuario = _b.sent();
                compra = typeorm_1.getRepository(compra_1.Compra).create({
                    nombre: nombre,
                    descripcion: descripcion,
                    topico: topico,
                    duracion: duracion,
                    lecciones: lecciones,
                    precio: precio,
                });
                compra.usuario = usuario;
                typeorm_1.getRepository(compra_1.Compra).save(compra);
                usuario.compras = __spreadArrays(usuario.compras, [compra]);
                return [4 /*yield*/, typeorm_1.getRepository(usuario_1.Usuario).save(usuario)];
            case 3:
                _b.sent();
                return [2 /*return*/, res.json(usuario)];
            case 4:
                error_6 = _b.sent();
                return [2 /*return*/, res.json({ message: error_6 })];
            case 5: return [2 /*return*/];
        }
    });
}); };
