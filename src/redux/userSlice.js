import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: 2,
    name: 'Diego',
    email: 'diegoshhh@gmail.com',
  },
  reducers: {},
});

export default userSlice.reducer;
