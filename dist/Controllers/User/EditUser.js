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
const EditUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, lastname, email, country, city, address, postal_code, phone_number, } = req.body;
        if (name &&
            lastname &&
            email &&
            country &&
            city &&
            address &&
            postal_code &&
            phone_number) {
            yield User_1.UserModel.updateOne({ email: email }, {
                name,
                lastname,
                country,
                city,
                address,
                postal_code,
                phone_number,
            });
            const savedInstance = yield User_1.UserModel.findOne({ email: email });
            if (savedInstance) {
                return res.json(savedInstance);
            }
            else {
                return res
                    .status(409)
                    .json({ status: 'No se pudo editar el usuario.' });
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
module.exports = EditUser;
