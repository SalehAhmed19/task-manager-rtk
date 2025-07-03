// src/features/user/usersSlice.js
import { createSlice } from "@reduxjs/toolkit";

console.log("usersSlice.js is being loaded!"); // Add this line

const initialState = {
  name: "Saleh Ahmed Mahin",
  email: "dev.saleh.ahmed.mahin@gmail.com",
  userTasks: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
