import { Request, Response } from 'express';
import { InvestOptionModel } from '../../DBSource/Models/Investing';

interface InvestingOption {
   name: string;
   value: number;
   type: string;
   symbol: string;
   picture: string;
}

const getActiveInvestingOptions = async (req: Request, res: Response) => {
   try {
      const allInvestingOptions = await InvestOptionModel.find();

      if (allInvestingOptions) {
         const allActiveInvestingOptions = allInvestingOptions.map(
            (option: InvestingOption) => {
               if (option.value > 0) return option;
            }
         );
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
