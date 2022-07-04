const {
   prop,
   getModelForClass,
   modelOptions,
} = require('@typegoose/typegoose');
const { Monedas } = require('../ModelsConfig/ContractConfig');

@modelOptions({
   options: { allowMixed: 0 },
   schemaOptions: { timestamps: false },
})
class ContractIC {
   @prop({ required: true, trim: true })
   user_id: string;

   @prop({ required: true })
   inversion: Array<number>;

   @prop({ enum: Monedas, required: true })
   moneda_de_inversion: Monedas;

   @prop({ enum: Monedas, required: true })
   moneda_de_retiro: Monedas;

   @prop({ required: true })
   contract: number;

   @prop({ required: true })
   inversion_total: number;

   @prop({ required: true })
   comienzo_de_inversion: string;

   @prop({ required: true })
   fin_de_inversion: string;

   @prop({ required: true })
   beneficio: number;
}

export const ContractICModel = getModelForClass(ContractIC);
