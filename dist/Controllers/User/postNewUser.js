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
const PostNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, lastname, email, password, role, country, city, address, postal_code, phone_number, } = req.body;
        if (name && lastname && email && password && role) {
            const newUserInstance = yield User_1.UserModel.create({
                name,
                lastname,
                email,
                password,
                role,
                country,
                city,
                address,
                postal_code,
                phone_number,
            });
            if (newUserInstance) {
                return res.json(newUserInstance);
            }
            else {
                return res
                    .status(409)
                    .json({ status: 'No se pudo guardar el usuario.' });
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
module.exports = PostNewUser;
