import React from 'react'
import './components.scss'
import Logo from '../assets/images/tedora.png'
import ChatGpt from '../assets/images/chatgpt.png'


function Sidebar() {
  return (
    <div className='sidebar h-screen w-2/12 block'>
        <div className='h-4/5 bg-side-two'>
            <div className='block'>
                <a href="https://tedora.info/">
                    <img src={Logo} alt="" className='center w-2/3 pt-7' />
                </a>
                <img src={ChatGpt} alt="" className='center w-1/4' />
            </div>
        </div>
        <div className="h-1/5 bg-side-one">

        </div>
    </div>
  )
}

export default Sidebar