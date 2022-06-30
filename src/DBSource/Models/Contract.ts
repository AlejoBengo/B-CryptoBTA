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
class Contract {
   @prop({ required: true, trim: true })
   user_id: string;

   @prop({ required: true })
   inversion: number;

   @prop({ enum: Monedas, required: true })
   moneda_de_inversion: Monedas;

   @prop({ enum: Monedas, required: true })
   moneda_de_retiro: Monedas;

   @prop({ required: true })
   contract: number;

   @prop({ required: true })
   inversion_total: number | null;

   @prop({ required: true })
   comienzo_de_inversion: Date;

   @prop({ required: true })
   fin_de_inversion: Date;

   @prop({ required: true })
   beneficio: number;

   @prop({ required: true })
   ganacia_estimada: number;
}

export const ContractModel = getModelForClass(Contract);
