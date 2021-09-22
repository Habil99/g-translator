import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0
}

const translator = createSlice({
  name: "translator",
  initialState,
  reducers: {}
});

export default translator.reducer;