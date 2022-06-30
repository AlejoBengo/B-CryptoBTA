import { Request, Response } from 'express';
import { UserModel } from '../../DBSource/Models/User';

const EditUser = async (req: Request, res: Response) => {
   try {
      const {
         name,
         lastname,
         email,
         country,
         city,
         address,
         postal_code,
         phone_number,
      } = req.body;
      if (
         name &&
         lastname &&
         email &&
         country &&
         city &&
         address &&
         postal_code &&
         phone_number
      ) {
         await UserModel.updateOne(
            { email: email },
            {
               name,
               lastname,
               country,
               city,
               address,
               postal_code,
               phone_number,
            }
         );

         const savedInstance = await UserModel.findOne({ email: email });
         if (savedInstance) {
            return res.json(savedInstance);
         } else {
            return res
               .status(409)
               .json({ status: 'No se pudo editar el usuario.' });
         }
      } else {
         return res.status(400).json({ status: 'Faltan datos.' });
      }
   } catch (err: any) {
      console.log(err);
      return res.status(500).json(err);
   }
};

module.exports = EditUser;
