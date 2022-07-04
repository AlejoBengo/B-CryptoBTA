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
exports.ContractICModel = void 0;
const { prop, getModelForClass, modelOptions, } = require('@typegoose/typegoose');
const { Monedas } = require('../ModelsConfig/ContractConfig');
let ContractIC = class ContractIC {
};
__decorate([
    prop({ required: true, trim: true }),
    __metadata("design:type", String)
], ContractIC.prototype, "user_id", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", Array)
], ContractIC.prototype, "inversion", void 0);
__decorate([
    prop({ enum: Monedas, required: true }),
    __metadata("design:type", String)
], ContractIC.prototype, "moneda_de_inversion", void 0);
__decorate([
    prop({ enum: Monedas, required: true }),
    __metadata("design:type", String)
], ContractIC.prototype, "moneda_de_retiro", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", Number)
], ContractIC.prototype, "contract", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", Number)
], ContractIC.prototype, "inversion_total", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", String)
], ContractIC.prototype, "comienzo_de_inversion", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", String)
], ContractIC.prototype, "fin_de_inversion", void 0);
__decorate([
    prop({ required: true }),
    __metadata("design:type", Number)
], ContractIC.prototype, "beneficio", void 0);
ContractIC = __decorate([
    modelOptions({
        options: { allowMixed: 0 },
        schemaOptions: { timestamps: false },
    })
], ContractIC);
exports.ContractICModel = getModelForClass(ContractIC);
