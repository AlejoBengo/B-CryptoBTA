import { Request, Response } from 'express';
import { ContractModel } from '../../DBSource/Models/Contract';

const createContract = async (req: Request, res: Response) => {
   try {
      const {
         user_id,
         inversion,
         moneda_de_inversion,
         moneda_de_retiro,
         contract,
         inversion_total,
         comienzo_de_inversion,
         beneficio,
         ganacia_estimada,
      } = req.body;
      if (user_id) {
         const newUserInstance = await ContractModel.create({
            user_id,
            inversion,
            moneda_de_inversion,
            moneda_de_retiro,
            contract,
            inversion_total,
            comienzo_de_inversion,
            beneficio,
            ganacia_estimada,
         });
         if (newUserInstance) {
            return res.json(newUserInstance);
         } else {
            return res.status(403).json({ status: 'No se ha podido creadr' });
         }
      }
   } catch (err: any) {
      console.log(err);
      return res.status(500).json(err);
   }
};

module.exports = createContract;
