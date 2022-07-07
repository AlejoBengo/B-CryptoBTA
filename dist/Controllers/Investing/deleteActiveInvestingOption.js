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
const Investing_1 = require("../../DBSource/Models/Investing");
const deleteActiveInvestingOption = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        console.log(_id);
        if (_id) {
            const newInvestingInstance = yield Investing_1.InvestOptionModel.deleteOne({ _id: _id });
            console.log(newInvestingInstance);
            if (newInvestingInstance) {
                return res.json(newInvestingInstance);
            }
            else {
                return res
                    .status(409)
                    .json({ status: 'No se pudo eliminar el detalle de inversion.' });
            }
        }
        else {
            return res.status(400).json({ status: 'Faltan datos.' });
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});
module.exports = deleteActiveInvestingOption;
