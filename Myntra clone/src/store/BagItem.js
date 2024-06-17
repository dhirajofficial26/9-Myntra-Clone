import { createSlice } from "@reduxjs/toolkit";



const BagItem=createSlice({
    name:'BagItemList',
    initialState:[],
    reducers:{
        AddBagItem:(state,action)=>{
            // console.log(action.payload.id)
            state.push(action.payload.id); 
            console.log("state is "+state)

            return  state;
        },

        DeleteBagItem:(state,action)=>{
            console.log(action.payload.id)

            state.pop(action.payload.id)
            return  state;
             

        }, 

    }
})
export const BagItemActions=BagItem.actions;
export default BagItem;