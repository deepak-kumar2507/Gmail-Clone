import { configureStore } from "@reduxjs/toolkit"
// import appReducer from ".appSlice";
import appReducer from "./appSlice"; // path for the same directory

const store = configureStore({
    reducer:{
        appSlice:appReducer
      }
});
export default store;