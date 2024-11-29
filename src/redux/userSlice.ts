import {createSlice, PayloadAction} from '@reduxjs/toolkit';


type IUserIdentity = {
  language: string
}

export const userInitialState:IUserIdentity = {
 language: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    saveLanguage: (state, action: PayloadAction<'th' | 'en'>) => {
      state.language = action.payload;
    },
  },
});

export default userSlice.reducer;
export const {
  saveLanguage,
} = userSlice.actions;
