import { RxArrowRight, RxOpenInNewWindow } from 'react-icons/rx'
import Link from 'next/link'
import AnimatedText from '@/components/AnimatedText'
import HireMe from '@/components/HireMe'

export default function Home() {
  return (
    <>
        <div className='w-[90%] mx-auto mt-60 lg:mt-80 z-10'>

            <AnimatedText text="Hello, my name is Brandon." />
            <p className="text-lg font-semibold pt-5 pb-5 text-center">I am a software developer devoted to creating &apos;pixel-perfect&apos; user experiences.</p>
            <Link href="/projects" className="hidden md:flex justify-center py-7 font-semibold cursor-pointer group">Feel free to browse the projects<RxArrowRight className="transform transition duration-300 group-hover:translate-x-4 h-6"/></Link>
            <div className='flex items-center justify-center my-10 lg:my-0 lg:mt-10'>
              <Link href="/Resume (1).pdf" target={"_blank"} 
              className='flex items-center bg-dark dark:bg-[#4db1ff] text-light p-1.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark dark:hover:text-light border-2 border-transparent transform transition duration-300 hover:border-dark dark:border-light hover:scale-95'>
                Resume<RxOpenInNewWindow className='w-6 ml-1'/>
              </Link>
              <Link href="mailto:dream.cloud936@gmail.com" target={"_blank"} 
              className='ml-4 text-lg text-dark font-medium capitalize underline underline-offset-4'>
                Contact
              </Link>
            </div>
              <HireMe />
        </div>
    </>
  )
}
