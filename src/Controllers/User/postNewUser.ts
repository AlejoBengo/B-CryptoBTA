import { Request, Response } from 'express';
import { UserModel } from '../../DBSource/Models/User';

const PostNewUser = async (req: Request, res: Response) => {
   try {
      const {
         name,
         lastname,
         email,
         password,
         role,
         country,
         city,
         address,
         postal_code,
         phone_number,
      } = req.body;
      if (name && lastname && email && password && role) {
         const newUserInstance = await UserModel.create({
            name,
            lastname,
            email,
            password,
            role,
            country,
            city,
            address,
            postal_code,
            phone_number,
         });
         if (newUserInstance) {
            return res.json(newUserInstance);
         } else {
            return res
               .status(409)
               .json({ status: 'No se pudo guardar el usuario.' });
         }
      } else {
         return res.status(400).json({ status: 'Faltan datos.' });
      }
   } catch (err: any) {
      console.log(err);
      return res.status(500).json(err);
   }
};

module.exports = PostNewUser;
