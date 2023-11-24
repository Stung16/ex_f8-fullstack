import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../Utils/client";

const initialState = {
  dataChello: null,
  apiKey: "",
  status: "lazy",
};
export const chelloSlice = createSlice({
  name: "chello",
  initialState,
  reducers: {
    addCloum: (state, action) => {
      state.list = action.payload;
    },
    updateData: (state, action) => {
      state.dataChello = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getApikey.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getApikey.fulfilled, (state, action) => {
      state.apiKey = action.payload;
      localStorage.setItem("apiKey", JSON.stringify(action.payload));
      state.status = "succes";
    });
    builder.addCase(getApikey.rejected, (state) => {
      state.status = "err";
    });
  },
});

export const getApikey = createAsyncThunk("getApikey", async (dataEmail) => {
  const queryString = new URLSearchParams({ email: dataEmail });
  const { data } = await client.get(`/api-key?${queryString}`);
  return data.data.apiKey;
});

// export const getData = createAsyncThunk("getData", async (api) => {
//   console.log(data);
//   return data;
// });
