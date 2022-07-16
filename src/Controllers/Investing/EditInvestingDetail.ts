import { Request, Response } from 'express';
import { InvestOptionModel } from '../../DBSource/Models/Investing';

const editInvestingDetail = async (req: Request, res: Response) => {
   try {
      const { _id,name, value, type, picture, symbol } = req.body;
      if (_id && name && value && type && picture && symbol) {
         const newInvestingInstance = await InvestOptionModel.updateOne(
            { _id: _id },
            {
               value,
               type,
               picture,
               symbol,
            }
         );
         const savedInstance = await InvestOptionModel.findOne({ _id: _id });
         if (savedInstance) {
            return res.json(savedInstance);
         } else {
            return res
               .status(409)
               .json({ status: 'No se pudo editar el detalle de inversion.' });
         }
      } else {
         return res.status(400).json({ status: 'Faltan datos.' });
      }
   } catch (err: any) {
      console.log(err);
      return res.status(500).json(err);
   }
};

module.exports = editInvestingDetail;
