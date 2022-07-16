import { Request, Response } from 'express';
import { InvestOptionModel } from '../../DBSource/Models/Investing';

const deleteActiveInvestingOption = async (req: Request, res: Response) => {
   try {
      const { _id} = req.params;
      console.log(_id)
      if (_id) {
         const newInvestingInstance = await InvestOptionModel.deleteOne(
            { _id: _id }
         );
         console.log(newInvestingInstance)
         if (newInvestingInstance) {
            return res.json(newInvestingInstance);
         } else {
            return res
               .status(409)
               .json({ status: 'No se pudo eliminar el detalle de inversion.' });
         }
      } else {
         return res.status(400).json({ status: 'Faltan datos.' });
      }
   } catch (err: any) {
      console.log(err);
      return res.status(500).json(err);
   }
};

module.exports = deleteActiveInvestingOption;
