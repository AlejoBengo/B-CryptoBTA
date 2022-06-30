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
const changePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, current_password, new_password } = req.body;
        if (email && current_password && new_password) {
            const userExistal = yield User_1.UserModel.findOne({ email: email });
            if (userExistal) {
                if (userExistal.password === current_password) {
                    if (userExistal.password === new_password) {
                        return res.status(400).json({
                            status: 'La nueva contraseña es igual a la anterior.',
                        });
                    }
                    else {
                        yield User_1.UserModel.updateOne({ email: email }, { password: new_password });
                        const newUserInstance = yield User_1.UserModel.findOne({
                            email: email,
                        });
                        return res.json(newUserInstance);
                    }
                }
                else {
                    return res
                        .status(400)
                        .json({ status: 'La contraseña introducida es incorrecta.' });
                }
            }
            else {
                return res.status(404).json({ status: 'Este email no existe.' });
            }
        }
        else {
            return res.status(400).json({ status: 'Faltan datos.' });
        }
    }
    catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ status: 'Ha ocurrido un problema en el servidor.' });
    }
});
module.exports = changePassword;
