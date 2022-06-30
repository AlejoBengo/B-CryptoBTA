import { Request, Response } from 'express';
import { UserModel } from '../../DBSource/Models/User';

const changePassword = async (req: Request, res: Response) => {
   try {
      const { email, current_password, new_password } = req.body;
      if (email && current_password && new_password) {
         const userExistal = await UserModel.findOne({ email: email });
         if (userExistal) {
            if (userExistal.password === current_password) {
               if (userExistal.password === new_password) {
                  return res.status(400).json({
                     status: 'La nueva contraseña es igual a la anterior.',
                  });
               } else {
                  await UserModel.updateOne(
                     { email: email },
                     { password: new_password }
                  );
                  const newUserInstance = await UserModel.findOne({
                     email: email,
                  });
                  return res.json(newUserInstance);
               }
            } else {
               return res
                  .status(400)
                  .json({ status: 'La contraseña introducida es incorrecta.' });
            }
         } else {
            return res.status(404).json({ status: 'Este email no existe.' });
         }
      } else {
         return res.status(400).json({ status: 'Faltan datos.' });
      }
   } catch (err) {
      console.log(err);
      return res
         .status(500)
         .json({ status: 'Ha ocurrido un problema en el servidor.' });
   }
};

module.exports = changePassword;
