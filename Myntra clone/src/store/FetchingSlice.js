import { createSlice } from "@reduxjs/toolkit";

const FetchingSlice=createSlice({
    name:'FetchStatus',
    initialState:{
        fetchdone:false,
        currentlyFetching:false,
    },
    reducers:{
        markFetchDone:(state)=>{
             state.fetchdone=true;

        },
        markFetchStarted:(state)=>{
          state.currentlyFetching=true;

        },
        markFetchFinished:(state)=>{
             state.currentlyFetching=false;

        }, 

    }
})
export const FetchActions=FetchingSlice.actions;
export default FetchingSlice;