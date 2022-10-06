import React from 'react'
import { motion } from "framer-motion"
import { Experience } from '../sanity/typings'
import { urlFor } from '../sanity'
import Image from 'next/image'
type Props = {
    experience: Experience
}
function ExperienceCard({experience}: Props) {
  return (
  
    <article className='flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[400px] md:w-[700px] xl:w-[1000px] h-[450px] snap-center bg-[#292929] p-[5px] opacity-40 hover:opacity-100  cursor-pointer transition-opacity duration-200 overflow-hidden '>
        <motion.img
        initial={{opacity: 0,
        y:-100
    }}
        whileInView={{opacity:1, y: 0}}
        transition={{duration:1.2}}
        viewport={{once: true}}
        className='w-24 h-24 rounded-full object-cover object-center' 
        src={urlFor(experience?.companyImage).url()} alt="" />

        <div className='px-0 md:px-10'>
            <h4 className='text-2xl  font-light '>
                Website Modification
            </h4>
            <p className='font-bold text-xl mt-1 '>
                Freelancer
            </p>
            <div className='flex  space-x-2 my-2 rounded-full'>
                <div className=' flex flex-row  rounded-full'>
                {experience?.technologies.map(technology => (
    <Image
    key={technology._id}
    
    src={urlFor(technology?.image).url()} 
    height="20px"
    width="20px"
    objectFit='contain'
    alt=''
    />
))}
                </div>



            </div>
            <p className='uppercase py-2 text-gray-300'>
                {new Date (experience.dateStarted).toDateString()} -
                
                {""} {experience.isCurrentlyWorking? "Present" : new Date(experience.dateEnded).toDateString()} </p>

            <ul className='list-disc space-y-2 ml-5 text-lg'>
                {experience.points}
            
                

            </ul>
        </div>
    </article>

  )
}

export default ExperienceCard