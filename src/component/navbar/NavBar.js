import React, { useState } from 'react'
import logo from './images/logo (2).png'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

export default function NavBar() {
  const [isMenuBarClicked, setIsMenuBarClicked] = useState(false)
  const handleMenuBar = ()=>{
   if(isMenuBarClicked){
     setIsMenuBarClicked(false)
     document.getElementById('h-text-1').style.visibility = 'visible'
     document.getElementById('h-text-2').style.visibility = 'visible'
   }
   else{
     setIsMenuBarClicked(true)
     document.getElementById('h-text-1').style.visibility = 'hidden'
     document.getElementById('h-text-2').style.visibility = 'hidden'
   } 
  }  
  return (
   <div className=' h-[45px] md:h-[10vh] w-[100vw] bg-[#f6f6f6]'>

      <div className='absolute top-[1.5%] left-[2%] md:hidden' onClick={handleMenuBar}>
        {!isMenuBarClicked?(<AiOutlineMenu size={25}></AiOutlineMenu>):(<AiOutlineClose size={25}></AiOutlineClose>)}
      </div>

      <div className=' hidden md:flex max-w-[95%] h-[100%] mx-auto items-center justify-between'>
        <img src={logo} className=' w-[20%] h-[80%] '></img>
        <ul className='w-[60%] h-[80%] flex items-center justify-end '>
          <li className='mx-[3.5%] max-h-[100%]'>Home</li>
          <li className='mx-[3.5%] max-h-[100%]'>Department</li>
          <li className='mx-[3.5%] max-h-[100%]'>About</li>
          <li className='mx-[3.5%] max-h-[100%]'>Contact</li>
          <li className='mx-[3.5%] max-h-[100%]'>Login</li>
        </ul>
      </div>

      <div className={isMenuBarClicked?'md:hidden fixed top-[45px] left-0 w-[60vw] h-[92vh] bg-[#d4d3d3] ease-in-out duration-500':
                      'fixed top-[45px] left-[-100%] w-[60vw] h-[92vh] bg-[#d4d3d3] ease-in-out duration-500'     }>
        <img src={logo} className=' w-[60%] h-[10%] my-[7%] mx-[2%] '></img>
        <ul className=' max-w-[80%] mx-auto text-left'>
          <li className=' py-[3.5%] pt-[8%]'>Home</li>
          <li className=' py-[3.5%] '>Department</li>
          <li className=' py-[3.5%] '>About</li>
          <li className=' py-[3.5%] '>Contact</li>
          <li className=' py-[3.5%] '>Login</li>
        </ul>
      </div>

   </div>
  )
}
