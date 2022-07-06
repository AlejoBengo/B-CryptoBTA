const {
   prop,
   getModelForClass,
   modelOptions,
} = require('@typegoose/typegoose');

@modelOptions({
   options: { allowMixed: 0 },
   schemaOptions: { timestamps: false },
})
class InvestOption {
   @prop({ required: true, trim: true })
   name: string;

   @prop({ required: true })
   value: number;

   @prop({ required: true }) // nasdaq || crypto || matprima || interescomp
   type: string;

   @prop({ required: true })
   symbol: string;

   @prop({ required: true })
   picture: string;
}

export const InvestOptionModel = getModelForClass(InvestOption);
