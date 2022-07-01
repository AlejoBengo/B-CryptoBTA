export const AcademyPromotion = (to: any, name: any) => {
   return {
      from: 'info@academybta.com',
      to: `${to}`,
      subject: '¡Obten un 10% de descuento en cualquier curso de Academy BTA!',
      text: `¡Hola ${name}!, el material que has preparado se ha guardado en HenryAsk correctamente. Recurre a la página para editarlo o eliminarlo. Puedes ingrsar a la plataforma en el siguiente link: https://henryask.vercel.app/ 🚀.`,
   };
};
