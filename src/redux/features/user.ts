
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserPayload } from "../../apis/user.api";
// Define a type for the slice state
interface UserState {
  user: IUserPayload;
}

// Define the initial state using that type
const initialState: UserState = {
    user: {
        email: "",
        password: ""
    },
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<IUserPayload>) => {
      state.user = action.payload;
    },
  },
});

export const { getUser } =
  userSlice.actions;
export default userSlice.reducer;