"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademyPromotion = void 0;
const AcademyPromotion = (to, name) => {
    return {
        from: 'info@academybta.com',
        to: `${to}`,
        subject: '¡Obten un 10% de descuento en cualquier curso de Academy BTA!',
        text: `¡Hola ${name}!, el material que has preparado se ha guardado en HenryAsk correctamente. Recurre a la página para editarlo o eliminarlo. Puedes ingrsar a la plataforma en el siguiente link: https://henryask.vercel.app/ 🚀.`,
    };
};
exports.AcademyPromotion = AcademyPromotion;
