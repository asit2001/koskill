import { Schema,model } from "mongoose";
import Joi from "joi";
import { USERSchemaType } from "../types";

const userSchema = new Schema<USERSchemaType>(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type :String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }
    }
)
/**
 *  function to handle user details validation using Joi.
 * @param obj - The request object.
 */
export function userValidation(obj:any){
    let schema = Joi.object<USERSchemaType>({
        name:Joi.string().min(3).required(),
        email:Joi.string().email().required(),
        password :Joi.string().required()
    })
    return schema.validate(obj);
}

const userModel = model("user",userSchema);
export default userModel;