"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compra = void 0;
var typeorm_1 = require("typeorm");
var usuario_1 = require("./usuario");
var Compra = /** @class */ (function () {
    function Compra() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Compra.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Compra.prototype, "nombre", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Compra.prototype, "descripcion", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Compra.prototype, "topico", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Compra.prototype, "duracion", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Compra.prototype, "lecciones", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Compra.prototype, "precio", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return usuario_1.Usuario; }, function (usuario) { return usuario.compras; }, {
            onDelete: "CASCADE",
        }),
        __metadata("design:type", usuario_1.Usuario)
    ], Compra.prototype, "usuario", void 0);
    Compra = __decorate([
        typeorm_1.Entity()
    ], Compra);
    return Compra;
}());
exports.Compra = Compra;
