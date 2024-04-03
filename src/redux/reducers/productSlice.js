import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  productDetail: null,
  isLoading: false,
  error: null,
};
export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (searchQuery, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/mjhn010/react-hnm/products?q=${searchQuery}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
export const fetchProductDetail = createAsyncThunk(
  "product/detail",
  async (id, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/mjhn010/react-hnm/products/${id}`;
      let response = await fetch(url);
      console.log( await response.json())
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

const productSlide = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
      .addCase(fetchProductDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetail = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// function productReducer(state=initialState,action){
//     let{type,payload} = action
//     switch(type){
//         case "GET_PRODUCT_SUCCESS":
//         return {...state,productList:payload.data}
//         case "GET_PRODUCT_DETAIL_SUCCESS":
//             return {...state, productDetail:payload.data}
//         default:
//             return{...state}
//     }
// }
// export default productReducer

export default productSlide.reducer;
