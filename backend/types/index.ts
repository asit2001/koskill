
 export interface CRMSchemaType{
  name: string
  email:string
  phone:number
  address:string
  city : string
  state : string
  country : string
  pin : number
  created_at: Date
}

export interface USERSchemaType{
  name:string,
  email:string,
  password:string,
}