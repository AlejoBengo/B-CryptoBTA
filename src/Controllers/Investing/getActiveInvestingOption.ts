import { Request, Response } from 'express';
import { InvestOptionModel } from '../../DBSource/Models/Investing';

interface InvestingOption {
   _id: string;
   name: string;
   value: number;
   type: string;
   symbol: string;
   picture: string;
   __v: number;
}

const getActiveInvestingOptions = async (req: Request, res: Response) => {
   try {
      const allInvestingOptions = await InvestOptionModel.find();

      if (allInvestingOptions) {
         let allActiveInvestingOptions: Array<InvestingOption> = [];
         for (let i = 0; i < allInvestingOptions.length; i++) {
            if (allInvestingOptions[i].value > 0) {
               console.log(i, allInvestingOptions[i]);
               allActiveInvestingOptions.push(allInvestingOptions[i]);
            }
         }
         console.log(allActiveInvestingOptions);
         if (allActiveInvestingOptions) {
            return res.json(allActiveInvestingOptions);
         } else {
            return res.status(404).json({
               status: 'Ninguna de las opciones tiene un valor positivo.',
            });
         }
      } else {
         return res
            .status(404)
            .json({ status: 'No hay opciones de inversión.' });
      }
   } catch (err: any) {
      console.log(err);
      return res.status(500).json(err);
   }
};

module.exports = getActiveInvestingOptions;
