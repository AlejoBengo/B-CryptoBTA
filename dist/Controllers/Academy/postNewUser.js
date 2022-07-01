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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Academy_1 = require("../../DBSource/Models/Academy");
const AcademyExe_1 = __importDefault(require("../../noti/executors/AcademyExe"));
const PostNewSubscriptor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = req.body;
        if (name && email) {
            const alreadyExists = yield Academy_1.SubscriptorModel.findOne({ email: email });
            if (alreadyExists) {
                return res.status(400).json(false);
            }
            const newSubscriptorInstance = yield Academy_1.SubscriptorModel.create({
                name,
                email,
            });
            if (newSubscriptorInstance) {
                (0, AcademyExe_1.default)(email, name);
                return res.json(newSubscriptorInstance);
            }
            else {
                return res.status(400).json(false);
            }
        }
        else {
            return res.status(400).json(false);
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});
module.exports = PostNewSubscriptor;
