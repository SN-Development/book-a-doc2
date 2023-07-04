import React, { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css';
import './WelcomeSlide.css'
import bgImage from './images/4.png'

export default function WelcomeSlide() {
  const style = {
    backgroundImage: `url(${bgImage})`,
  }
  const [hText01, setHText01] = useState('Welcome To')
  const [hText02, setHText02] = useState('Book-A-Doc')
  //let [textNo, setTextNo] = useState(1)

  useEffect(()=>{
    let txtNo = 1
    const headText01 = ["Welcome To","We Care","Helping Your"]
    const headText02 = ["Book-A-Doc","About Your Health","Stay Happy One"]
    const interval   = setInterval(()=>{

      setHText01(headText01[txtNo])
      setHText02(headText02[txtNo])
      txtNo = txtNo+1
      if(txtNo===3){
         txtNo = 0
      }
    },5000)
    return()=> clearInterval(interval);
  }
  ,[])
  return (
    <div className="pt-[6%] h-[30vh] md:h-[90vh] md:pt-[0%] w-[100vw] bg-center bg-cover" style={style}>
      <div className='pt-[13%] md:pt-[15%] max-w-[90%] mx-auto h-[70%] text-left'>
        <p className='text-[6vw] md:text-[4.5vw] font-bold text-[blue]' id='h-text-1'>{hText01}</p>
        <p className='-mt-[8px] text-[5.5vw] md:text-[4vw] md:-mt-[2%] font-bold text-[black]' id='h-text-2'>{hText02}</p>
        <p className='pt-[-5px] text-[2.5vw] md:text-[1.5vw] font-medium text-[rgb(119,118,105)]  capitalize pl-[0.5%] ' style={{wordSpacing:'0.3%'}}>We always brings your smile and happiness.</p>
        <div className='flex items-center pl-[0.5%] w-[70%] md:w-[40%] mt-[3%]'>
          <button className=' p-[2%] md:p-[2%] w-[35%] text-[2vw] md:text-[1.3vw] text-[white] bg-gradient-to-r from-[rgb(51,0,255)] to-[rgb(23,180,217)]' style={{wordSpacing:'5%'}}>Make Appointment</button>
          <button className=' p-[2%] md:p-[2%] ml-[8%] w-[35%] text-[2vw] md:text-[1.3vw] text-[white] bg-gradient-to-r from-[rgb(51,0,255)] to-[rgb(23,180,217)]' id='slide-btn-2'>View Department</button>
        </div>
        
      </div>
    </div>
  )
}
