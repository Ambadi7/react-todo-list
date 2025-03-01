import React from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

const Todo1 = ({id,taskName,isCompleted,deleteTask,index,doneTask,editTask }) => {
  return (
    <div className='text-black' key={id}>
        
          <div className={`${isCompleted?" bg-green-600 ":"bg-red-600"} max-w-xs w-80 min-h-64 max-h-max  rounded-md border border-double border-slate-900 shadow-md  dark:text-gray-800 `}>
            <div className="flex flex-col justify-between items-center p-6 space-y-8 min-h-[222px]">
              <div className="flex w-[250px] justify-between h-auto space-y-2 ">
                <h2 className="text-2xl h-16 font-semibold tracking-wide bg-black text-white rounded-md p-4">{index +1}</h2>
                <div className='flex  justify-center w-[200px]  '>
                  <h2 className="text-2xl flex-wrap w-[200px] font-semibold tracking-wide px-2"> {taskName}</h2> 
                </div>
                
                {/* <p className="dark:text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p> */}
              </div>
              <div className='flex gap-3 mt-10 items-center h-full'>
                <button type="button" onClick={()=>{deleteTask(id)}} className="flex items-center justify-center w-20 p-3 font-semibold tracking-wide rounded-md text-red-600 bg-black"><DeleteForeverOutlinedIcon/></button>
                <button type="button" onClick={()=>{doneTask(id)}} className="flex items-center justify-center w-24 p-3 font-semibold tracking-wide rounded-md text-green-600 bg-black"><TaskAltOutlinedIcon/></button>
                <button type="button" onClick={()=>{editTask(id)}} className="flex items-center justify-center w-20 p-3 font-semibold tracking-wide rounded-md text-blue-600 bg-black"><EditNoteOutlinedIcon/></button>
              </div>
                
            </div>
          </div>
        {/* <p className={`${isCompleted?"text-green-400 line-through":"text-black"}`}>{index +1} , {taskName} ,</p>  */}
        {/* <button className='text-black' onClick={()=>{deleteTask(id)}}>Delete</button> 
        <br /> */}
        {/* <button onClick={()=>{doneTask(id)}}>complete</button> */}
    </div>
  )
}

export default Todo1