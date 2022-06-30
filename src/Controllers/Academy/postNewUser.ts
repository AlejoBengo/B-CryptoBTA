import { Request, Response } from 'express';
import { SubscriptorModel } from '../../DBSource/Models/Academy';
import { sendPromotion } from '../../Notifications/prueba';

const PostNewSubscriptor = async (req: Request, res: Response) => {
   try {
      const { name, email } = req.body;
      if (name && email) {
         const alreadyExists = await SubscriptorModel.findOne({ email: email });
         if (alreadyExists) {
            return res.status(400).json(false);
         }
         const newSubscriptorInstance = await SubscriptorModel.create({
            name,
            email,
         });
         if (newSubscriptorInstance) {
            await sendPromotion(email, name);
            return res.json(newSubscriptorInstance);
         } else {
            return res.status(400).json(false);
         }
      } else {
         return res.status(400).json(false);
      }
   } catch (err: any) {
      console.log(err);
      return res.status(500).json(err);
   }
};

module.exports = PostNewSubscriptor;
