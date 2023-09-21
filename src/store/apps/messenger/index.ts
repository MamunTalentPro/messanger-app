import { createSlice } from '@reduxjs/toolkit'

export interface initialState {
  profile: {
    name:string,
    isActive:boolean
  },
  converSation:{
    sender?:string,
    receiver?:string,
  }[]
    
  
}

const initialState: initialState = {
  profile: {
    name:"Mr. Mamun",
    isActive:true,
  },
  converSation:[
    {
      sender:"Hello,Assalamulaikum",
      
      
      
    },
    {
      sender:"Are you there",
      
    },
    {
      receiver:"Yes I am in online"
      
    }

  ]
}

export const messengerSlice = createSlice({
  name: 'messenger',
  initialState,
  reducers: {
    setProfile:(state,action)=>{
      state.profile

    },
    sendMessage:(state,action)=>{
      state.converSation=[...state?.converSation,action.payload]
    }
  },
})


export const { setProfile,sendMessage } = messengerSlice.actions

export default messengerSlice.reducer