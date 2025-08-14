import {createSlice,type PayloadAction} from '@reduxjs/toolkit'

// type UserRole = 'tradie'| 'client' | 'enterprise' | null;
interface UserState {
    userRole:string| null;
}

const initialState:UserState = {
    userRole:null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        // setRole:(state,action:PayloadAction<UserRole>)=>{
        setRole:(state,action:PayloadAction<string | null>)=>{
            state.userRole = action.payload
        }
    }
})

export const {setRole} = userSlice.actions
export default userSlice.reducer