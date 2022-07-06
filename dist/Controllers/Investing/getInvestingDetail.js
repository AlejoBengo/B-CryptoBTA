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
const getInvestingDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const savedInstance = yield Investing_1.InvestOptionModel.find();
        if (savedInstance) {
            return res.json(savedInstance);
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});
module.exports = getInvestingDetail;
