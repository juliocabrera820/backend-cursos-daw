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
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminar = exports.actualizar = exports.obtenerCurso = exports.crearCurso = exports.obtenerCursos = void 0;
var typeorm_1 = require("typeorm");
var curso_1 = require("../entidades/curso");
exports.obtenerCursos = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var cursos, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, typeorm_1.getRepository(curso_1.Curso).find()];
            case 1:
                cursos = _a.sent();
                return [2 /*return*/, res.json(cursos)];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, res.json({ message: error_1 })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.crearCurso = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nombre, descripcion, topico, duracion, lecciones, precio, nuevoCurso, curso, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, nombre = _a.nombre, descripcion = _a.descripcion, topico = _a.topico, duracion = _a.duracion, lecciones = _a.lecciones, precio = _a.precio;
                nuevoCurso = typeorm_1.getRepository(curso_1.Curso).create({
                    nombre: nombre,
                    descripcion: descripcion,
                    topico: topico,
                    duracion: duracion,
                    lecciones: lecciones,
                    precio: precio,
                });
                return [4 /*yield*/, typeorm_1.getRepository(curso_1.Curso).save(nuevoCurso)];
            case 1:
                curso = _b.sent();
                return [2 /*return*/, res.json(curso)];
            case 2:
                error_2 = _b.sent();
                return [2 /*return*/, res.json({ message: error_2 })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.obtenerCurso = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, curso, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, typeorm_1.getRepository(curso_1.Curso).findOne(id)];
            case 2:
                curso = _a.sent();
                return [2 /*return*/, res.json(curso)];
            case 3:
                error_3 = _a.sent();
                return [2 /*return*/, res.json({ message: error_3 })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.actualizar = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, curso, cursoActualizado, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, typeorm_1.getRepository(curso_1.Curso).findOne(id)];
            case 2:
                curso = _a.sent();
                if (!curso) return [3 /*break*/, 4];
                typeorm_1.getRepository(curso_1.Curso).merge(curso, req.body);
                return [4 /*yield*/, typeorm_1.getRepository(curso_1.Curso).save(curso)];
            case 3:
                cursoActualizado = _a.sent();
                return [2 /*return*/, res.json(cursoActualizado)];
            case 4: return [2 /*return*/, res.json({ message: "El curso no existe" })];
            case 5:
                error_4 = _a.sent();
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
                return [4 /*yield*/, typeorm_1.getRepository(curso_1.Curso).delete(id)];
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
