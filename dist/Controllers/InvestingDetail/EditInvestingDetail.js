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
const InvestingDetail_1 = require("../../DBSource/Models/InvestingDetail");
const EditInvestingDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, value, type, picture, symbol } = req.body;
        if (name && value && type && picture && symbol) {
            const newInvestingInstance = yield InvestingDetail_1.DetailModel.updateOne({ name: name }, {
                value,
                type,
                picture,
                symbol
            });
            const savedInstance = yield InvestingDetail_1.DetailModel.findOne({ name: name });
            if (savedInstance) {
                return res.json(savedInstance);
            }
            else {
                return res
                    .status(409)
                    .json({ status: 'No se pudo editar el detalle de inversion.' });
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
module.exports = EditInvestingDetail;
/**
 *  class Detail {
    @prop({ required: true, trim: true })
    name: string;
 
    @prop({ required: true })
    value: number;
 
    @prop({ required: true })
    type: string; // nasdaq || crypto || matprima || interescomp

    @prop({ required: true })
    picture: string;
 
 }
 */ 