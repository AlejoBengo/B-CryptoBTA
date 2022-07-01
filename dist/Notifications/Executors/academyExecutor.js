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
const transporters_1 = require("../transporters");
const notifications_1 = require("../notifications");
const sendPromotion = (EmailTo, Name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, transporters_1.academyTransporter)((0, notifications_1.AcademyPromotion)(EmailTo, Name));
    }
    catch (err) {
        console.log(err);
    }
});
exports.default = sendPromotion;
