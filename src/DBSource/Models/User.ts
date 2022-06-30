const {
   prop,
   getModelForClass,
   modelOptions,
} = require('@typegoose/typegoose');

@modelOptions({
   options: { allowMixed: 0 },
   schemaOptions: { timestamps: false },
})
class User {
   @prop({ required: true, trim: true })
   name: string;

   @prop({ required: true, trim: true })
   lastname: string;

   @prop({ required: true, unique: true, trim: true, lowercase: true })
   email: string;

   @prop({ required: true })
   password: string;

   @prop({ required: true, trim: true }) // "user" || "administrator"
   role: string;

   @prop({ required: true, trim: true })
   country: string;

   @prop({ required: true, trim: true })
   city: string;

   @prop({ required: true, trim: true })
   address: string;

   @prop({ required: true })
   postal_code: number;

   @prop({ required: true })
   phone_number: number;
}

export const UserModel = getModelForClass(User);
