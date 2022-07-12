import { Request, Response } from 'express';
import { UserModel } from '../../DBSource/Models/User';
import { ContractICModel } from '../../DBSource/Models/ContractIC';
import { ContractClassicModel } from '../../DBSource/Models/ContractClassic';

const dataChecker = async (req: Request, res: Response) => {
   try {
      const { email, password } = req.body;
      if (!email || !password) {
         return res.status(400).json({ status: 'Faltan datos.' });
      } else {
         const user_data = await UserModel.findOne({ email: email });
         if (!user_data) {
            return res.status(404).json({ status: 'Este email no existe.' });
         } else {
            if (user_data.password !== password) {
               return res
                  .status(403)
                  .json({ status: 'La contraseña es incorrecta.' });
            } else {
               if (user_data.contract_specify === 'classic') {
                  const contract_data = await ContractClassicModel.findOne({
                     user_id: user_data._id,
                  });
                  if (contract_data) {
                     const userInformation = { user_data, contract_data };
                     return res.json(userInformation);
                  } else {
                     return res
                        .status(404)
                        .json('El usuario no tiene contrato aún.');
                  }
               } else {
                  const contract_data = await ContractICModel.findOne({
                     user_id: user_data._id,
                  });
                  if (contract_data) {
                     const userInformation = { user_data, contract_data };
                     return res.json(userInformation);
                  } else {
                     return res
                        .status(404)
                        .json('El usuario no tiene contrato aún.');
                  }
               }
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
