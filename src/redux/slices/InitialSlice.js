import {createSlice} from '@reduxjs/toolkit';

const initialSlice = createSlice({
  name: 'initial',
  initialState: {
    isDark: false,
    isUserLoggedIn: false,
    user: null,
    updateData: 0,
  },
  reducers: {
    setTheme(state) {
      state.isDark = !state.isDark;
    },
    setUserLogin(state, action) {
      state.isUserLoggedIn = true;
      state.user = action.payload;
    },
    setUserLogout(state) {
      state.isUserLoggedIn = false;
      state.user = null;
    },
    updateData(state) {
      state.updateData = !state.updateData;
    },
  },
});

export const {setTheme, setUserLogin, setUserLogout, updateData} =
  initialSlice.actions;
export default initialSlice.reducer;
