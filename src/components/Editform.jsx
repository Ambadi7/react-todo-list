import React, { useState } from 'react'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

const Editform = ({item,updateTask}) => {
    const [value,setValue] =useState(item.taskName)
    const handlesubmit = (e) =>{
        e.preventDefault()
        updateTask(value,item.id)
        setValue("")
    }
  return (
    <div className='text-black'>
        <form onSubmit={handlesubmit} action="">
            <div className={`${item.isCompleted?" bg-green-600 ":"bg-red-600"} max-w-xs w-80 h-64  rounded-md border border-double border-slate-900 shadow-md  dark:text-gray-800 `}>
            <div className="flex flex-col justify-between items-center p-6 space-y-8 h-full">
              <div className="flex w-full justify-between space-y-2 ">
                <h2 className="text-2xl font-semibold tracking-wide bg-black text-white rounded-md p-4">{item.id }</h2>
                <div className='flex justify-center w-full'>
                  <input className='text-xl mr-2 outline-none ' type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />
                </div>
              </div>
              <div className='flex gap-3 mt-10 items-center h-full'>
                
                <button type="submit"  className="flex items-center justify-center w-24 p-3 font-semibold tracking-wide rounded-md text-green-600 bg-black"> <CheckCircleOutlinedIcon/> </button>

              </div>
                
            </div>
          </div>
        </form>
        
    </div>
  )
}

export default Editform