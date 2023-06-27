"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Csharp from '../../public/svg/Csharp.svg'
import Tailwind from '../../public/svg/Tailwind.svg'
import Nextjs from '../../public/svg/Nextjs.svg'
import Vuejs from '../../public/svg/Vuejs.svg'
import Reactjs from '../../public/svg/React.svg'
import Html5 from '../../public/svg/Html5.svg'
import Js from '../../public/svg/Js.svg'
import Css3 from '../../public/svg/Css3.svg'
import Jquery from '../../public/svg/Jquery.svg'
import Bootstrap from '../../public/svg/Bootstrap.svg'
import Framer from '../../public/svg/Framer.svg'

export default function Skills() {

    return (
        <>
            <motion.h2 
            initial={{y: 50, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true, amount: 0.8}}
            transition={{duration: 1}}
            className="font-bold text-6xl lg:text-8xl mt-32 lg:mt-64 w-full text-center">Skills</motion.h2>

            <div className="w-full h-[500px] lg:h-[85vh] relative flex items-center justify-center">
                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "-35vw", y: "-20vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Nextjs} alt='Next.js logo' height={40} width={40} />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "-11vw", y: "-20vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Vuejs} alt='Next.js logo' height={40} width={40} />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "15vw", y: "-20vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Reactjs} alt='Next.js logo' height={40} width={40} />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "35vw", y: "-20vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Js} alt='Next.js logo' height={40} width={40} />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "-30vw", y: "-3vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Html5} alt='Next.js logo' height={40} width={40} />
                </motion.div>



                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "-10vw", y: "-3vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Css3} alt='Next.js logo' height={40} width={40} />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "10vw", y: "-3vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Csharp} alt='Next.js logo' height={40} width={40} />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "30vw", y: "-3vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Jquery} alt='Next.js logo' height={60} width={100} />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "-25vw", y: "15vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Bootstrap} alt='Next.js logo' height={40} width={40} />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "0vw", y: "15vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Framer} alt='Next.js logo' height={40} width={40} />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "25vw", y: "15vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Tailwind} alt='Next.js logo' height={60} width={100} />
                </motion.div>
            </div>
        </>
    )
}