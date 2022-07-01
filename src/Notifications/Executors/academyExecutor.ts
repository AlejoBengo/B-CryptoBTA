import { academyTransporter } from '../transporters';
import { AcademyPromotion } from '../notifications';

const sendPromotion = async (EmailTo: string, Name: string) => {
   try {
      academyTransporter(AcademyPromotion(EmailTo, Name));
   } catch (err) {
      console.log(err);
   }
};

export default sendPromotion;
