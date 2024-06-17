import { configureStore } from "@reduxjs/toolkit";
import BagItem from "./BagItem";
import FetchingSlice from "./FetchingSlice";
import itemSlice from "./ItemSlice";



const MyntraStore=configureStore({
    reducer:{
        item:itemSlice.reducer,
        FetchStatus:FetchingSlice.reducer,
        BagItemList:BagItem.reducer
    }
    
})
export default MyntraStore