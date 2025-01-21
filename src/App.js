import { useState,useEffect } from "react";

import Todo1 from "./components/Todo1";
import Editform from "./components/Editform";


const localData =() =>{
  let list= localStorage.getItem("data")
  if(list){
    return JSON.parse(list)
  }
  else{
    return []
  }
}

function App() {

  //time
  const [date,setDate] = useState(new Date())
  setInterval(()=>setDate(new Date ()),1000)
  clearInterval(date)
  
  
  const [todolist,setTodoList] = useState(localData())
  const [newTask,setNewTask] = useState("")

  //add TASK
  const addTask =(e)=>{
    e.preventDefault()
    if(!newTask){
      alert("Enter a task")
    }
    else{
      let newId = todolist.length===0?1:todolist[todolist.length-1].id+1
      let newEntry={ id:newId,taskName:newTask, isCompleted:false}
      setTodoList([...todolist,newEntry])
      setNewTask("")
    }
  }

  // local storage
  useEffect(()=>{
    localStorage.setItem("data",JSON.stringify(todolist))
  })

  //delete Task
  const deleteTask = (id) =>{
    setTodoList(todolist.filter((item) =>{
      return item.id !== id
    }))
  }

  //done task
  
   
  const doneTask = (id) =>{
    setTodoList(
      todolist.map((item)=>{
        return item.id === id ? {...item,isCompleted:true}:item
      })
    )
  }

  //edit task
  const editTask =(id)=>{
    setTodoList(todolist.map((item)=>{
      return item.id===id ?{...item,isEditing : !item.isEditing}:item
    }))
  }

  //update task 
  const updateTask = (modifiedTask,id) =>{
    setTodoList(todolist.map((item)=>{
        return item.id === id ? {...item,taskName:modifiedTask,isEditing:!item.isEditing}:item
    }))
  }

  return (
    <div className="flex flex-col items-center gap-4  font-mono bg-slate-900 text-white  w-full md:min-h-screen ">
      <div className="text-2xl  pt-12">
        <h1>{date.toLocaleDateString()}</h1>
        <h1>{date.toLocaleTimeString()}</h1>
      </div>
      <div className="flex justify-center">
        <h1 className="text-7xl">Todo-List</h1>
      </div>
      
        <form action="">
          <div className="flex justify-center  text-black bg-white w-80 md:w-96 h-12">
            <input className="text-xl w-64 ml-4 bg-transparent" value={newTask} type="text"  onChange={(e)=>{setNewTask(e.target.value)}} placeholder="Enter the task"/>
            <button className="pl-4 mr-4" onClick={addTask}>Add Task</button>
          </div>
        </form>
        <div className="flex flex-wrap px-24 justify-center gap-4 mt-6 w-4/6 ">
          {
            todolist.map((item,index)=>{
              return(
                item.isEditing ? (
                  <Editform item={item} updateTask={updateTask}/>
                ) :
                (
                  <Todo1 key={item.id} id={item.id} index={index} taskName={item.taskName} isCompleted={item.isCompleted} deleteTask={deleteTask} doneTask={doneTask} editTask={editTask}/>
                )
              )
            })
          }
        </div>
        

      
    </div>
  );
}

export default App;
