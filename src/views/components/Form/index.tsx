import React, { useState } from "react";
import { plus } from "../../../assets";
import './index.scss'

interface CreateTaskProps{
    onAdd:(title:string)=>void;
}


export const CreateTask:React.FC<CreateTaskProps>=({onAdd})=>{

    const [inputValue,setInputValue]=useState('')

    const addTask =()=>{
      onAdd(inputValue)
      setInputValue('')

    }
        
    return (
        <div className="todo__form">
            <input className="todo__input" type="text"
             placeholder="Enter task"
             value={inputValue}
             onChange={(e)=>setInputValue(e.target.value)} 
             onKeyDown={(e)=>{
                 if(e.key==='Enter'){
                    addTask()
                     
                 }
             }}
             
             />
            <button className="todo__btn"
                   onClick={addTask}
            ><img src={plus} alt="plus" /></button>
        </div>
    )
}