import React from 'react'
import { useToDoStore } from '../../../data/stores/useToDoStore'
import { CreateTask } from '../../components/Form'
import { TodoItem } from '../../components/TodoList'
import './index.scss'


export const App:React.FC=()=>{

  const [tasks,createTask,updateTask,removeTask]=useToDoStore(state=>[
      state.tasks,
      state.createTask,
      state.updateTask,
      state.removeTask,
     
  ])
 
  console.log(tasks)


    return (
      <div className='todo'>
          <h1 className='todo__title' >To Do App</h1>
          <section className='todo__section-form'>
          <CreateTask  onAdd={(title)=>{
              if(title.trim()){
                createTask(title)
              }
          }} />
          </section>
          <section className='todo__list'>
         {!tasks.length&&<p className='todo__notfound'>There is no one task</p>}
           {tasks?.map(({id,title})=>
             <TodoItem id={id} title={title} key={id} onEdited={updateTask} onDeleted={removeTask} />
           )}
          </section>

          
      </div>
    )
}