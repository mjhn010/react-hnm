import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

let initialState = {
  productDetail:null

}

export const fetchProductDetail = createAsyncThunk("product/detail",async(id,thunkApi)=>{
    try{
      let url = `https://my-json-server.typicode.com/mjhn010/react-hnm/products/${id}`;
      let response = await fetch(url);
      return await response.json();
    }catch(error){
      thunkApi.rejectWithValue(error.message)
    }
  })


const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {
  
    },
    extraReducers:(builder)=>{
      builder.addCase(fetchProductDetail.pending,(state)=>{
          state.isLoading = true
      })
      .addCase(fetchProductDetail.fulfilled,(state,action)=>{
          state.isLoading = false
          state.productDetail = action.payload;
      })
      .addCase(fetchProductDetail.rejected,(state, action)=>{
          state.isLoading = false
          state.error = action.payload
      })
    }
  });

  export default detailSlice.reducer