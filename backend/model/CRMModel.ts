import { Schema, model } from "mongoose";
import Joi from "joi";
import { CRMSchemaType } from "../types";

const CRMSchema = new Schema<CRMSchemaType>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pin: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Schema.Types.Date,
    default: Date.now,
    required: true,
  },
});
const CRMModel = model<CRMSchemaType>("CRM", CRMSchema);
/**
 *  function to handle customer details validation using Joi.
 * @param obj - The request object.
 */
export function crmValidation(obj: any) {
  var schema = Joi.object<CRMSchemaType>({
    name: Joi.types().string.min(3).max(50).required(),
    address: Joi.types().string.min(3).max(50).required(),
    city: Joi.types().string.min(3).max(50).required(),
    country: Joi.types().string.min(3).max(50).required(),
    state: Joi.types().string.required(),
    email: Joi.types().string.email().required(),
    created_at: Joi.types().date,
    phone: Joi.number().required(),
    pin: Joi.types().number.required(),
  });
  return schema.validate(obj);
}

export default CRMModel;
