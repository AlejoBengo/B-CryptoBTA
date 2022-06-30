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
const User_1 = require("../../DBSource/Models/User");
const dataChecker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ status: 'Faltan datos.' });
        }
        else {
            const letAccessToUser = yield User_1.UserModel.findOne({ email: email });
            if (!letAccessToUser) {
                return res.status(404).json({ status: 'Este email no existe.' });
            }
            else {
                if (letAccessToUser.password !== password) {
                    return res
                        .status(403)
                        .json({ status: 'La contraseña es incorrecta.' });
                }
                else {
                    return res.json(letAccessToUser);
                }
            }
        }
    }
    catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ status: 'Ha ocurrido un problema en el servidor.' });
    }
});
module.exports = dataChecker;
