const {
   prop,
   getModelForClass,
   modelOptions,
} = require('@typegoose/typegoose');

@modelOptions({
   options: { allowMixed: 0 },
   schemaOptions: { timestamps: false },
})
class Subscriptor {
   @prop({ required: true, trim: true })
   name: string;

   @prop({ required: true, unique: true, trim: true, lowercase: true })
   email: string;
}

export const SubscriptorModel = getModelForClass(Subscriptor);
