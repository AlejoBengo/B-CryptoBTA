import { transportator } from '../transporters';
import { AcademyPromotion } from '../notifications';

const AcademyPromote = async (emailTo: string, name: string) => {
   try {
      transportator(AcademyPromotion(emailTo, name));
   } catch (err) {
      console.log(err);
   }
};

export default AcademyPromote;
