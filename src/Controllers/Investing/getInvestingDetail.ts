import { Request, Response } from 'express';
import { InvestOptionModel } from '../../DBSource/Models/Investing';

const getInvestingDetail = async (req: Request, res: Response) => {
   try {
      const savedInstance = await InvestOptionModel.find();
      if (savedInstance) {
         return res.json(savedInstance);
      }
   } catch (err: any) {
      console.log(err);
      return res.status(500).json(err);
   }
};

module.exports = getInvestingDetail;
