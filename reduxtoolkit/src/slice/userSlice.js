import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers= createAsyncThunk('user/data', async()=>{
    
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    return res.json();
    
    
})

const userSlice = createSlice({
    name:"users",
    initialState:{
        loading:false,
        user:[],
        error:''
    },
    reducers:{

    },
    extraReducers: (builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            console.log(action,"ddddqqq");
            state.loading=false,
            state.user= action.payload
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            console.log(action,"error");
            
            state.loading=false,
            state.error = action.error.message
        })

    }
})

export default userSlice.reducer;