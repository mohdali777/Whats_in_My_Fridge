import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const verifyUser = createAsyncThunk(
    'test/verifyUser', async()=>{
        try {
            console.log('called');
            
        } catch (error) {
            console.log(error);
            
        }
    }
)

const testSlice = createSlice({
    name : 'test',
    initialState : {
        value:1
    },
    reducers:{
    changeValue : (state)=>{
        state.value = state.value += 1;
    }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(verifyUser.pending,(state)=>{
            state.value = state.value+=5
        })
    }
})

 
export const {changeValue} = testSlice.actions
export default testSlice.reducer