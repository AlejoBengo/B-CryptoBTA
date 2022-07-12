import { Request, Response } from 'express';
import { ContractICModel } from '../../DBSource/Models/ContractIC';
import { ContractClassicModel } from '../../DBSource/Models/ContractClassic';

interface ClassicContract {
   _id: string;
   user_id: string;
   inversion: number;
   moneda_de_inversion: string;
   moneda_de_retiro: string;
   contract: number;
   comienzo_de_inversion: string;
   fin_de_inversion: string;
   beneficio: number;
   __v: number;
}
interface CIContract {
   _id: string;
   user_id: string;
   inversion: Array<number>;
   moneda_de_inversion: string;
   moneda_de_retiro: string;
   contract: number;
   inversion_total: number;
   comienzo_de_inversion: string;
   fin_de_inversion: string;
   beneficio: number;
   __v: number;
}

const getSummaryOfAllInversions = async (req: Request, res: Response) => {
   try {
      const allClassicContracts: Array<ClassicContract> =
         await ContractClassicModel.find();
      const AllICContracts: Array<CIContract> = await ContractICModel.find();
      let summary: number = 0;

      if (allClassicContracts) {
         allClassicContracts.forEach((con: ClassicContract) => {
            summary += con.inversion;
         });
      }
      if (AllICContracts) {
         AllICContracts.forEach((con: CIContract) => {
            summary += con.inversion_total;
         });
      }
      return res.json(summary);
   } catch (err: any) {
      console.log(err);
      return res.status(500).json(err);
   }
};

module.exports = getSummaryOfAllInversions;
