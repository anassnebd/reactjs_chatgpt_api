import React from 'react'
import Logo from '../assets/images/tedora.png'
import './components.scss'

function Sidebar() {
  return (
    <div className='sidebar h-screen w-2/12 bg-gold-primary block'>
        <div className='h-4/5 bg-red-900'>
            <img src={Logo} alt="" className='center w-2/3' />
        </div>
        <div className="h-1/5 bg-green-500">

        </div>
    </div>
  )
}

export default Sidebar