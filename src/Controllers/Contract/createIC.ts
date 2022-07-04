import { Request, Response } from 'express';
import { ContractICModel } from '../../DBSource/Models/ContractIC';

const createIC = async (req: Request, res: Response) => {
   try {
      const {
         user_id,
         inversion,
         moneda_de_inversion,
         moneda_de_retiro,
         contract,
         inversion_total,
         comienzo_de_inversion,
         fin_de_inversion,
         beneficio,
      } = req.body;
      if (user_id) {
         const newUserInstance = await ContractICModel.create({
            user_id,
            inversion,
            moneda_de_inversion,
            moneda_de_retiro,
            contract,
            inversion_total,
            comienzo_de_inversion,
            fin_de_inversion,
            beneficio,
         });
         if (newUserInstance) {
            return res.json(newUserInstance);
         } else {
            return res.status(403).json({ status: 'No se ha podido crear.' });
         }
      }
   } catch (err: any) {
      console.log(err);
      return res.status(500).json(err);
   }
};

module.exports = createIC;
