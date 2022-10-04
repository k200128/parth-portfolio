import React from 'react'
import { motion } from "framer-motion"
import { Project } from '../sanity/typings'
import { urlFor } from '../sanity'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    projects:Project[]
}

function Projects({projects}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 scrolbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'> 
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl -mb-40px'> 
    Projects
        </h3>
        <div className='relative w-full  flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
           {projects?.map((project,i ) => (
            <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-1 items-center justify-center p-20 md:p-44  xl:p-[550px] lg:p-[350px] h-screen '>
                <Link href={project.linkToBuild}>
           
                <motion.img
                initial={{y:-300,opacity:0 }}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1.2}}
                viewport={{once:true}}
                
                src={urlFor(project?.image).url()} alt=""  />
                </Link> 

            <div className='space-y-2 px-[10px] md:px-[20px] max-w-4xl md:py-[10px] '>
            
                <h4 className='text-xl font-semibold text-center'>  <span >  Case Stydy {i + 1} of {projects.length}:  </span>
                
                {project?.title} 
                 
                <span className='underline decoration-[#F7AB0A]/50'> </span> 
                
       
                  
                 </h4>
<div className='flex items-center space-x-2 justify-center'>

{project?.technologies.map((technology) =>(
    
                    <Image
                    
                    key={technology._id} src={urlFor(technology.image).url()} alt="" 
                    height="40px" width="40px" />
                
                ))}

</div>
                <p className='text-sm text-center'>
                    {project?.summary}
                </p>
            </div>
            </div>
           ))}

        </div>
        <div className='w-full absolute top-[40%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12'> 

        </div>
        </motion.div>
  )
}

export default Projects