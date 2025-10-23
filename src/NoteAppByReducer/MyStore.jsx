import React, { createContext, useReducer } from 'react'
export const DataProvider = createContext()

const MyStore = ({children}) => {
    const initialState = {
        taskList:[{
            work:"get Money",
            workDate: "12/12/2012",
        },
    ],
        task:{
            work:"",
            workDate:"",
        }
    }
    const reducerFun = (state,action)=>{
        let updateState = state
        if(action.type=="task"){
            updateState = {...state,task:action.payload}
            console.log(updateState)
        }else if(action.type=="addTask"){
            updateState = {...state,taskList:[...state.taskList,action.payload],task:{work:"",workDate:""}};
        }else if(action.type=="delete"){
            let afterDelete = state.taskList.filter((elm,ind)=>ind!=action.payload);
            updateState = {...state,taskList: afterDelete,};
        }
        return updateState
    }
    const [state, dispatch] = useReducer(reducerFun,initialState)
  return (
    <DataProvider value={{state, dispatch}}>
        {children}
    </DataProvider>
  )
}

export default MyStore
