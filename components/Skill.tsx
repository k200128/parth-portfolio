import React from 'react'
import { motion } from "framer-motion"
import { Skill } from '../sanity/typings';
import { urlFor } from '../sanity';

type Props = {
    skill: Skill
    directionleft?: boolean;
}

function Skill({directionleft, skill}: Props) {
  return ( 
  <div className='group relative flex cursor-pointer'>
 <motion.img
    initial={{
        x: directionleft ? -200 : 200,
        opacity: 0
    }}
    transition={{
        duration: 1,
    }}
    whileInView={{
        opacity: 1,
        x: 0
    }}
    src={urlFor(skill?.image).url()} className='rounded-full border border-gray-500 object-cover w-20 h-20  xl:w-30 xl:h-30 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out '
    />
    <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300  ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-30 xl:h-30 rounded-full z-0 '>
        <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100 '>{skill?.progress}%</p>
        </div>
    </div>
  </div>
   
  )
}

export default Skill