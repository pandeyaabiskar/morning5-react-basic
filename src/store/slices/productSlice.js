import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productData: [],
  isLoading: false,
  isError: false,
  singleProduct: "",
};

export const fetchAllData = createAsyncThunk(
  "product/fetchAllData",
  async (category) => {
    let apiUrl = process.env.REACT_APP_BASE_URL;
    try {
      if (category) {
        apiUrl = `${apiUrl}?category=${category}`;
      }
      const { data } = await axios(apiUrl);
      return data;
    } catch (err) {
      return err;
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getSingleProduct: (state, productID) => {
      state.singleProduct = state.productData.filter(
        (product) => product._id === productID
      );
    },
  },
  extraReducers: {
    [fetchAllData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchAllData.fulfilled]: (state, action) => {
      state.productData = action.payload;
      state.isLoading = false;
    },
    [fetchAllData.rejected]: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = productSlice.actions;

export default productSlice.reducer;
