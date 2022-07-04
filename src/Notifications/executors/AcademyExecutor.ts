import { academyTransportator } from '../transporters';
import { AcademyPromotion } from '../notifications';

const AcademyPromote = async (emailTo: string, name: string) => {
   try {
      academyTransportator(AcademyPromotion(emailTo, name));
   } catch (err) {
      console.log(err);
   }
};

export default AcademyPromote;
