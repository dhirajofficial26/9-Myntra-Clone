import { createSlice } from "@reduxjs/toolkit";



const itemSlice=createSlice({
    name:"item",
    initialState:[],
    reducers:{
        AddIntialstate:(state,action)=>{
            return state=action.payload;
        }
    }
})
export default itemSlice;
export const itemActions=itemSlice.actions;