import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { User } from "src/auth/schema/user.schema";
import * as mongoose from 'mongoose';


@Schema({
    collection:"product",
    timestamps:true
})export class Product{
    
@Prop()
productName: string


@Prop()
productPrice: number


@Prop()
productDesc: string

@Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
    createdBy: User

}
export const ProductSchema = SchemaFactory.createForClass(Product);
