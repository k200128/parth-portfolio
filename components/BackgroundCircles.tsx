import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
         opacity:0,
        }}
     animate= {{
        scale: [1, 2, 2, 3, 1],
        opacity:[0.1, 0.2, 0.4, 0.8, 0.5],
        borderRadius:["20%","20%","50%","80%","20%"]
      }}
      transition={{
      duration: 2.5
      }}
      className='relative flex justify-center items-center py-[50px] ' > 
        <div className='absolute border  border-[#333333] rounded-full h-[150px] w-[150px] mt-[260px] animate-ping'/>
        <div className=' absolute rounded-full border border-[#333333]   h-[300px] w-[300px] mt-[260px] '/>
        <div className=' absolute rounded-full border border-[#333333] h-[400px] w-[400px] mt-[260px] '/>
        <div className=' rounded-full border border-[#F7AB0A] opacity-20 h-[470px] w-[470px] absolute mt-[260px] animate-pulse '/>
        
        <div className=' absolute rounded-full border border-[#333333] h-[500px] w-[500px] mt-[260px] '/>


    </motion.div>
  )
}

export default BackgroundCircles