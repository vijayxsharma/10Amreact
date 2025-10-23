import React, { useContext, useReducer } from 'react'
import { DataProvider } from '../store/Store'

const initialState = {
        count:0,
        method:"default"
    }
    const reducerFun = (state,action)=>{
        let updateState = state
        if(action.type=="increment"){
            updateState = {...state,count:state.count+1, method:action.type}
        }else if(action.type=="decrement"){
            updateState = {...state,count:state.count-1, method:action.type}
        }else if(action.type=="reset"){
            updateState = {...state,count:0, method:action.type}
        }
        return updateState
    }
    

const AllProvider = ({children}) => {
  const [state,dispatch] = useReducer(reducerFun,initialState)
  return (
    <DataProvider value={{state,dispatch}}>
        {children}
    </DataProvider>
  )
}

export default AllProvider
