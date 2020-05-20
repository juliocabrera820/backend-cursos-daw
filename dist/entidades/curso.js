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
exports.Curso = void 0;
var typeorm_1 = require("typeorm");
var Curso = /** @class */ (function () {
    function Curso() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Curso.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Curso.prototype, "nombre", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Curso.prototype, "descripcion", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Curso.prototype, "topico", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Curso.prototype, "duracion", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Curso.prototype, "lecciones", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Curso.prototype, "precio", void 0);
    Curso = __decorate([
        typeorm_1.Entity()
    ], Curso);
    return Curso;
}());
exports.Curso = Curso;
