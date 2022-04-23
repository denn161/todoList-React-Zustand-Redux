import React, { useEffect, useRef, useState } from "react";
import { edit,check,trash } from "../../../assets";
import styles from './index.module.scss'


interface TodoItemProps {
    id:string;
    title:string;
    onEdited:(id:string,title:string)=>void;
    onDeleted:(id:string)=>void;
}

export const TodoItem:React.FC<TodoItemProps>=({id,title,onDeleted,onEdited})=>{
      
    const [checked,setChecked]=useState(false)
    
    const [editTitle,setEditTitle]=useState(title)

    const [isEdit,setIsEdit]=useState(false)
    
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
       if(isEdit){
           inputRef?.current?.focus()
       }

    },[isEdit])   
        
    return (
        <div className={styles.todo__item}>
         <label className={styles.todo__label}>
          <input className={styles.todo__input} type="checkbox"
           checked={checked}
           disabled={isEdit}
           onChange={(e)=>{
            setChecked(e.target.checked)
            
           }} />
           {isEdit?(<input className={styles.todo__isedit} ref={inputRef} type={'text'} value={editTitle} onChange={(e)=>{
                setEditTitle(e.target.value)
                    
           }} onKeyDown={(e)=>{
               if(e.key==='Enter'){
                   onEdited(id,editTitle)
                   setIsEdit(false)
               }
           }} />):( <h3 className={styles.todo__title}>{title}</h3>)}
         {!isEdit&&(<div className={styles.todo__hidden}></div>)}
         </label>
         <div className={styles.todoitem__btns}>
         {!checked?(   <button        
          aria-label="Edit" 
          className={styles.todoitem__btn}
           onClick={()=>{
               setIsEdit(true)
           }}>
             <img src={edit} alt="edit"  />
         </button>):null}
         <button aria-label="Delete" onClick={()=>onDeleted(id)} className={styles.todoitem__btn}>
             <img src={trash} alt="edit" />
         </button>

         </div>
         {checked&&(<div className={styles.todo__compleat}></div>)}
          
        </div>
    )


}


