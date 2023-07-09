import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API

export const getCrmThunks = createAsyncThunk("getCrm",async()=>{
    const res = await axios.get("/api/crm",{
        withCredentials:true,
        headers:{
            Authorization:localStorage.getItem("token")
        }
    })
    return res.data
})
export const deleteCrmThunks = createAsyncThunk("deleteCrm",async(id:string)=>{
    await axios.delete("/api/crm",{
        withCredentials:true,
        data:{
            id
        },
        headers:{
            Authorization:localStorage.getItem("token")
        }
    
    })
    return id;
})
export const updateCrmThunks = createAsyncThunk("updateCrm",async(data:Omit<CRMScType,"_id"|"created_at"> &{id:string})=>{
    const res = await axios.put("/api/crm",data,{
        withCredentials:true,
        headers:{
            Authorization:localStorage.getItem("token")
        },
    })
    return res.data
})
export const createCrmThunks = createAsyncThunk("createCrm",async(data:Omit<CRMScType,"_id"|"created_at">)=>{
    const res = await axios.post("/api/crm",data,{
        withCredentials:true,
        headers:{
            Authorization:localStorage.getItem("token")
        },
    })
    return res.data
})