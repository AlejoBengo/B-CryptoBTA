import { Request, Response } from 'express';
import { DetailModel } from '../../DBSource/Models/InvestingDetail';

const getInvestingDetail = async (req: Request, res: Response) => {
   try {

         const savedInstance = await DetailModel.find();
         if (savedInstance) {
            return res.json(savedInstance);
         }

   } catch (err: any) {
      console.log(err);
      return res.status(500).json(err);
   }
};

module.exports = getInvestingDetail;
/**
 *  class Detail {
    @prop({ required: true, trim: true })
    name: string;
 
    @prop({ required: true })
    value: number;
 
    @prop({ required: true })
    type: string; // nasdaq || crypto || matprima || interescomp

    @prop({ required: true })
    picture: string;
 
 }
 */