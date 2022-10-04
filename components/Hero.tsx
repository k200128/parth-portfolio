import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity';
import { PageInfo } from '../sanity/typings';
import BackgroundCircles from './BackgroundCircles';


type Props = {
    pageInfo: PageInfo
}

function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({

        words:
         [
            `Hi, My Name's ${pageInfo.name}`,
         "Guy-who-loves-Travelling.tsx", "ButLovesToCodeMore />"],
        loop: true,
        delaySpeed:2000,
      })
      
    
  return (
    <div className='h-screen flex flex-col space-y-3 items-center justify-center text-center overflow-hidden  scrollbar-thumb-[#F7AB0A]/80'>
<BackgroundCircles/>
<Image className='relative rounded-full mx-auto object-cover' src={urlFor(pageInfo?.heroImage).url()} 
alt="" 
height="128px"
width="128px"
objectFit='contain' 
layout='fixed'/>
<div className='z-20'>
    <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px] '>
        {pageInfo?.role}
    </h2>
<h1 className='text-2xl lg:text-3xl font-bold px-[20px]'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor ="#F7AB0A"/>
        </h1>
       <div className='pt-[10px]'>
        <Link href="#about">
        <button className='heroButton'>About</button>
        </Link>
        <Link href="#experience">
        <button className='heroButton'>Experience</button>
        </Link>
        <Link href="#skills">
        <button className='heroButton'>Skills</button>
        </Link>
<Link href="#projects">
<button className='heroButton'>Projects</button>

</Link>
        
        


       </div>
</div>
  
    </div>
  )
}

export default Hero