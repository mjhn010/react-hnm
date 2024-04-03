import { createSlice } from "@reduxjs/toolkit"

let initialState={
    id:'',
    password:'',
    authenticate:false,
    error:null
}

//로그인은 코드에서는 비동기가 필요하지않아 createAsyncThunk할 필요가 없다 ?
//하지만 프로젝트를 풀스택 백엔드와 같이 협업하게 된다면 동일하게 createAsyncThunk해줘야한다.


//ex
// export const fetchLogin = createAsyncThunk("login",(id,password,thunkApi)=>{
//     try{
//         let url = ""
//         let response = fetch(url)
//         return response.json()
//     }catch(error){
//         thunkApi.rejectWithValue(error.message)
//     }

// })


// const loginSlide = createSlice({
//     name:"login",
//     initialState,
//     reducers:{
//         //내부변경
//     },
//     extraReducers:(builder)=>{
//         builder.addCase(fetchLogin.pending,(state)=>{
//             state.authenticate = false
//         }).addCase(fetchLogin.fulfilled,(state,action)=>{
//             state.id = action.payload
//             state.password = action.payload
//             state.authenticate = true
//         }).addCase(fetchLogin.rejected,(state,action)=>{
//             state.authenticate = false
//         })
//     }
// })

function authenticateReducer(state=initialState,action){
    let {type,payload} = action
    switch(type){
        case "LOGIN_SUCCESS":
            console.log("das")
            return {...state, id:payload.id,password:payload.password,authenticate:true}
        default:
            return {...state}
    }
}
export default authenticateReducer