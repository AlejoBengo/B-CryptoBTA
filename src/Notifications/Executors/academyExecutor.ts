import { academyTransportator } from '../transporters';
import { AcademyPromotion } from '../notifications';

export const sendPromotion = async (EmailTo: string, Name: string) => {
   try {
      academyTransportator(AcademyPromotion(EmailTo, Name));
   } catch (err) {
      console.log(err);
   }
};
