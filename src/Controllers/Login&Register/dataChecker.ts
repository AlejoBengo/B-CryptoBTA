import { Request, Response } from 'express';
import { UserModel } from '../../DBSource/Models/User';

const dataChecker = async (req: Request, res: Response) => {
   try {
      const { email, password } = req.body;
      if (!email || !password) {
         return res.status(400).json({ status: 'Faltan datos.' });
      } else {
         const letAccessToUser = await UserModel.findOne({ email: email });
         if (!letAccessToUser) {
            return res.status(404).json({ status: 'Este email no existe.' });
         } else {
            if (letAccessToUser.password !== password) {
               return res
                  .status(403)
                  .json({ status: 'La contraseña es incorrecta.' });
            } else {
               return res.json(letAccessToUser);
            }
         }
      }
   } catch (err) {
      console.log(err);
      return res
         .status(500)
         .json({ status: 'Ha ocurrido un problema en el servidor.' });
   }
};

module.exports = dataChecker;
