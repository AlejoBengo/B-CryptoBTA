import { Request, Response } from 'express';
import { DetailModel } from '../../DBSource/Models/InvestingDetail';

const PostNewInvestingDetail = async (req: Request, res: Response) => {
   try {
      const {
        name,
        value,
        type,
        picture
      } = req.body;
      if (name && value && type && picture) {
         const newInvestingInstance = await DetailModel.create({
            name,
            value,
            type,
            picture
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