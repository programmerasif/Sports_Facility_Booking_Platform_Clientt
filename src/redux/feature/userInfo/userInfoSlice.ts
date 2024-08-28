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
      }
    },
  });

  export const {setUserInfo} =userInfotSlice.actions;
  export default userInfotSlice.reducer