import { Request, Response } from 'express';
import { InvestOptionModel } from '../../DBSource/Models/Investing';

const PostNewInvestingDetail = async (req: Request, res: Response) => {
   try {
      const { name, value, type, picture, symbol } = req.body;
      if (name && value && type && picture) {
         const newInvestingInstance = await InvestOptionModel.create({
            name,
            value,
            type,
            picture,
            symbol,
         });
         if (newInvestingInstance) {
            return res.json(newInvestingInstance);
         } else {
            return res
               .status(409)
               .json({ status: 'No se pudo guardar el detalle de inversion.' });
         }
      } else {
         return res.status(400).json({ status: 'Faltan datos.' });
      }
   } catch (err: any) {
      console.log(err);
      return res.status(500).json(err);
   }
};

module.exports = PostNewInvestingDetail;
