import { Request, Response } from 'express';
import { DetailModel } from '../../DBSource/Models/InvestingDetail';

const EditInvestingDetail = async (req: Request, res: Response) => {
   try {
      const {
        name,
        value,
        type,
        picture,
        symbol
      } = req.body;
      if (name && value && type && picture&&symbol) {
         const newInvestingInstance = await DetailModel.updateOne(
            { name: name },
            {
                value,
                type,
                picture,
                symbol
            }
         );
         const savedInstance = await DetailModel.findOne({ name: name });
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

module.exports = EditInvestingDetail;
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