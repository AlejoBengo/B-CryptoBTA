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
Object.defineProperty(exports, "__esModule", { value: true });
const ContractIC_1 = require("../../DBSource/Models/ContractIC");
const createIC = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id, inversion, moneda_de_inversion, moneda_de_retiro, contract, inversion_total, comienzo_de_inversion, fin_de_inversion, beneficio, } = req.body;
        if (user_id) {
            const newUserInstance = yield ContractIC_1.ContractICModel.create({
                user_id,
                inversion,
                moneda_de_inversion,
                moneda_de_retiro,
                contract,
                inversion_total,
                comienzo_de_inversion,
                fin_de_inversion,
                beneficio,
            });
            if (newUserInstance) {
                return res.json(newUserInstance);
            }
            else {
                return res.status(403).json({ status: 'No se ha podido crear.' });
            }
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});
module.exports = createIC;
