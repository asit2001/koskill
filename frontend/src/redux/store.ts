import {configureStore} from "@reduxjs/toolkit"
import crm from "./reducer"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
    reducer:{
        crm: crm
    }
})
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const  useAppDispatch:()=>AppDispatch = useDispatch; 
export const  useAppSelector:TypedUseSelectorHook<RootState> = useSelector;