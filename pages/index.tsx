import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import WorkExperience from '../components/WorkExperience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import {  Experience, PageInfo, Project, Skill, Social } from '../sanity/typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'
import { fetchExperiences } from '../utils/fetchExperiences'
import { urlFor } from '../sanity'
import Image from 'next/image'


type Props ={
  pageInfo: PageInfo;
  experiences: Experience[];
  skills:Skill[];
  projects:Project[];
  socials:Social[];
}


const Home = ({ pageInfo,
  experiences,
  skills,
  projects,
  socials,}: Props) => {
  return (
    <div  className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll  overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title> {pageInfo?.name} Portfolio</title>
      </Head>

    <Header socials={socials}/>

 
  <section id= "hero" className='snap-start'>
<Hero pageInfo={pageInfo}/>
  </section>


  <section id= "about"  className='snap-center'>
<About pageInfo={pageInfo}/>
  </section>

{/* Experience */}
<section id= "experience"  className='snap-center'>
<WorkExperience experiences={experiences}/>
  </section>

{/* Skills */}
<section id= "skills"  className='snap-start'>
<Skills  skills= {skills}/>

  </section>

{/* Projects */}
<section id= "projects"  className='snap-start'>
<Projects projects={projects} />
</section>


{/* Conatct Me */}
<section id= "contact"  className='snap-center'>
<ContactMe />
</section>
<Link href="#hero">
<footer className='sticky bottom-[20px] w-full cursor-pointer'>
  <div className='flex items-center justify-center'>
    <div className='  h-10 w-10 filter grayscale hover:grayscale-0 cursor-pointer rounded-b-full '>
    <Image  src={urlFor(pageInfo?.heroImage).url()}
     alt=""  layout='fill'/>
    </div>
    
     </div>
</footer>

</Link>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {

const pageInfo: PageInfo = await fetchPageInfo(); 
const experiences: Experience[] = await fetchExperiences();
const skills: Skill[] = await fetchSkills();
const projects: Project[] = await fetchProjects();
const socials: Social[] = await fetchSocials();

return {
  props: {
    pageInfo,
    experiences,
    skills,
    projects,
    socials,
  },

  revalidate:10,
}



}