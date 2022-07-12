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
const ContractClassic_1 = require("../../DBSource/Models/ContractClassic");
const getSummaryOfAllInversions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allClassicContracts = yield ContractClassic_1.ContractClassicModel.find();
        const AllICContracts = yield ContractIC_1.ContractICModel.find();
        let summary = 0;
        if (allClassicContracts) {
            allClassicContracts.forEach((con) => {
                summary += con.inversion;
            });
        }
        if (AllICContracts) {
            AllICContracts.forEach((con) => {
                summary += con.inversion_total;
            });
        }
        return res.json(summary);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});
module.exports = getSummaryOfAllInversions;
