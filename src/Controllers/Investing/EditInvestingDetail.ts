import { Request, Response } from 'express';
import { InvestOptionModel } from '../../DBSource/Models/Investing';

const editInvestingDetail = async (req: Request, res: Response) => {
   try {
      const { name, value, type, picture, symbol } = req.body;
      if (name && value && type && picture && symbol) {
         const newInvestingInstance = await InvestOptionModel.updateOne(
            { name: name },
            {
               value,
               type,
               picture,
               symbol,
            }
         );
         const savedInstance = await InvestOptionModel.findOne({ name: name });
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
