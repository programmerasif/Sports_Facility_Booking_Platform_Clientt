import { TInitialState, TUser } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState:TInitialState = {
    user: null
}

const userInfotSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      setUserInfo: (state, action:PayloadAction<TUser>) => {
      
        
        state.user = action.payload;
      },
      logOut: (state) => {
        state.user = null;
    }
    },
  });

  export const {setUserInfo,logOut} =userInfotSlice.actions;
  export default userInfotSlice.reducer