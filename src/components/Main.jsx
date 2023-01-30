import React from 'react'
import './components.scss'
import SendIcon from '../assets/icons/send.png'

function Main() {
  return (
    <div className='relative main h-screen w-10/12 block'>
        <div className='h-5 w-10 bg-red-500'>

        </div>
        <div className='absolute w-3/6 bottom-12 right-0 left-0 center flex'>
            <input type="text" name="" id="" className='w-11/12 h-10 bg-input-primary rounded-l-sm outline-none pl-5 text-sm'/>
            <button className='bg-zinc-700 text-black w-1/12 rounded-r-sm outline-transparent'><img src={SendIcon} className='w-4 center' alt="" /></button>

        </div>  
    </div>
  )
}

export default Main