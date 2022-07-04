import { transportator } from '../transporters';
import { AnswerForPostData } from '../notifications';

const AnswerForPost = async (emailTo: string, name: string) => {
   try {
      transportator(AnswerForPostData(emailTo, name));
   } catch (err) {
      console.log(err);
   }
};

export default AnswerForPost;
