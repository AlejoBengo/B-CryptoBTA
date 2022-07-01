"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerForPostData = void 0;
/*RESPUESTA A POSTEO*/
const AnswerForPostData = (to, who) => {
    return {
        from: 'info@academybta.com',
        to: `${to}`,
        subject: '¡Tu pregunta ha sido respondida :D!',
        text: `¡Hola!, ${who} a respondido a tu pregunta. Puedes ingrsar a la plataforma en el siguiente link: https://henryask.vercel.app/ 🚀.`,
    };
};
exports.AnswerForPostData = AnswerForPostData;
