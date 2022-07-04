const {
    prop,
    getModelForClass,
    modelOptions,
 } = require('@typegoose/typegoose');
 
 @modelOptions({
    options: { allowMixed: 0 },
    schemaOptions: { timestamps: false },
 })
 class Detail {
    @prop({ required: true, trim: true })
    name: string;
 
    @prop({ required: true })
    value: number;
 
    @prop({ required: true })
    type: string; // nasdaq || crypto || matprima || interescomp

    @prop({ required: true })
    symbol: string;

    @prop({ required: true })
    picture: string;
 
 }
 
 export const DetailModel = getModelForClass(Detail);
 