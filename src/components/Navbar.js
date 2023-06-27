"use client"

import Logo from './Logo'
import {  useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { MoonIcon, SunIcon } from './Icons'
import { usePathname, useRouter } from 'next/navigation'


{/*
const CustomLink = ({href, title, className=""}) => {
    

    return (
        <Link href={href} className={`${className} relative group antialiased`}>
            {title}
            <span className={`h-[2px] inline-block bg-black dark:bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${pageURL === href ? "w-full" : "w-0"}
            `}>&nbsp;</span>
        </Link>
    )
}

*/}

const CustomMobileLink = ({href, title, className="", toggle}) => {
    const router = useRouter()
    const pageURL = usePathname()

    const handleClick = () => {
        toggle()
        router.push(href)
    }
    return (
        <button onClick={handleClick} href={href} className={`${className} relative`}>
            {title}

            <span className={`h-[2px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${pageURL === href ? "w-full" : "w-0"}`}>&nbsp;</span>
        </button>
    )
}

export default function Navbar() {

    const [mode, setMode] = useThemeSwitcher();
    const [open, setOpen] = useState(false);
    const [navbar, setNavbar] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    useEffect( () => {

        const changeBackground = () => {
            if (scrollY >= 20) {
                setNavbar(true)
            } else {
                setNavbar(false)
            }
        }
        document.addEventListener("scroll", changeBackground)
    }, [])

    return (
        <header>
            <nav className={`fixed top-0 left-0 z-10 flex w-full filter backdrop-blur-lg dark:text-[#191835] px-10 py-2 items-center transition-all duration-300 ease-in-out
            ${navbar ? 'bg-light dark:bg-[#3192DE] transform transition-all duration-200' : null}
            `}>

                <div className='w-full flex justify-start'>
                    <Logo />
                </div>

                <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className="w-10 mr-12"
                >
                    {
                        mode === "dark" ?
                        <SunIcon className={"fill-black"} />
                        : <MoonIcon className={"fill-black"} />
                    }
                </button>

{/* Alternate hamburger button to 'X' */}
                <button className='flex flex-col justify-center items-center' onClick={handleClick}>
                    <span className={`bg-black dark:bg-white block h-0.5 w-6 rounded-sm transition-all duration-200 ease-out ${open ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                    <span className={`bg-black dark:bg-white block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-200 ease-out ${open ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-black dark:bg-white block h-0.5 w-6 rounded-sm transition-all duration-200 ease-out ${open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </button>
{/*                        
                
                <div className='w-full lg:flex justify-evenly items-center hidden'>
                    <div className="w-full flex justify-end items-center">

                        <div className="flex">
                            <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                            className="mx-4"
                            >
                                {
                                    mode === "dark" ?
                                    <SunIcon className={"fill-black"} />
                                    : <MoonIcon className={"fill-black"} />
                                }
                            </button>
                            <CustomLink href="/projects" title='PROJECTS' className='mx-4 font-medium' />
                            <CustomLink href="/about" title='ABOUT' className='mx-4 font-medium' />
                        </div>
                    </div>
                </div>
*/}

            </nav>

{/* Navigation Menu 'open settings' true/false ====> */}

            {
                open ?

                <motion.div 
                initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                animate={{scale: 1, opacity: 1 }}
                className='w-[70vw] md:w-[50vw] lg:w-[30vw] z-50 justify-evenly border items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white dark:text-black dark:bg-white/75 rounded-lg backdrop-blur-sm py-32 antialiased'>
                <div className="w-full flex justify-center items-center">

                    <div className="flex flex-col-reverse text-center">
                        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className="mx-8"
                        >
                            {
                                mode === "dark" ?
                                <SunIcon className={"fill-black"} />
                                : <MoonIcon className={"fill-black"} />
                            }
                        </button>
                        <CustomMobileLink href="/" title='HOME' className='mx-4 my-8 font-medium' toggle={handleClick} />
                        <CustomMobileLink href="/about" title='ABOUT' className='mx-4 my-8 font-medium' toggle={handleClick} />
                        <CustomMobileLink href="/projects" title='PROJECTS' className='mx-4 font-medium' toggle={handleClick} />
                    </div>
                </div>
                </motion.div>

                : null
            }

        </header>
    )
}