"use client"

import { motion } from 'framer-motion'
import { Csharp, Tailwind, Nextjs, Vuejs, Reactjs, Html5, Js, Css3, Jquery, Bootstrap, Framer } from './Icons'

const MovingIcon = ({children, x, y }) => {
    return (
        <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x: 0, y: 0, opacity: 0}}
                    whileInView={{ x: x, y: y, opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    {children}
                </motion.div>
    )
}

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

                <MovingIcon x="-35vw" y="-20vw"><Nextjs /></MovingIcon>
                <MovingIcon x="-11vw" y="-20vw"><Tailwind /></MovingIcon>
                <MovingIcon x="15vw" y="-20vw"><Vuejs /></MovingIcon>
                <MovingIcon x="35vw" y="-20vw"><Reactjs /></MovingIcon>
                <MovingIcon x="-30vw" y="-3vw"><Js /></MovingIcon>
                <MovingIcon x="-10vw" y="-3vw"><Html5 /></MovingIcon>
                <MovingIcon x="10vw" y="-3vw"><Css3 /></MovingIcon>
                <MovingIcon x="30vw" y="-3vw"><Csharp /></MovingIcon>
                <MovingIcon x="-25vw" y="15vw"><Jquery /></MovingIcon>
                <MovingIcon x="0vw" y="15vw"><Bootstrap /></MovingIcon>
                <MovingIcon x="25vw" y="15vw"><Framer /></MovingIcon>

{/* ##### == This is kept only in case I need to rewrite Icons individually (Responsiveness) == #####

                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "-35vw", y: "-20vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Nextjs />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "-11vw", y: "-20vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Tailwind />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "15vw", y: "-20vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Vuejs />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "35vw", y: "-20vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Reactjs />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "-30vw", y: "-3vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Js />
                </motion.div>



                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "-10vw", y: "-3vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Html5 />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "10vw", y: "-3vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Css3 />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "30vw", y: "-3vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Csharp />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "-25vw", y: "15vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Jquery />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "0vw", y: "15vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Bootstrap />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full cursor-pointer absolute hover:animate-pulse"
                    whileHover={{scale: 0.9}}
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "25vw", y: "15vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Framer />
                </motion.div>
*/}
            </div>
        </>
    )
}