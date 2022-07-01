import { academyTransporter } from '../transporters';
import { AcademyPromotion } from '../notifications';

export const sendPromotion = async (EmailTo: string, Name: string) => {
   try {
      academyTransporter(AcademyPromotion(EmailTo, Name));
   } catch (err) {
      console.log(err);
   }
};
