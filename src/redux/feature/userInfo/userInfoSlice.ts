import { TInitialState, TUser } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState:TInitialState = {
    user:[]
}

const userInfotSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      setUserInfo: (state, action:PayloadAction<TUser>) => {
        state.user.push(action.payload);
      },
      logOut: (state) => {
        state.user = [];
    }
    },
  });

  export const {setUserInfo,logOut} =userInfotSlice.actions;
  export default userInfotSlice.reducer