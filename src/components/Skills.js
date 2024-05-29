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

            <div className="w-full h-[500px] lg:h-[90vh] flex items-center justify-center relative">
                <motion.div className="flex items-center justify-center rounded-full absolute"
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "-35vw", y: "-20vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Nextjs} alt='Next.js logo' height={40} width={40} />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full absolute"
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "-11vw", y: "-20vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Vuejs} alt='Vue.js logo' height={40} width={40} />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full absolute"
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "15vw", y: "-20vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Reactjs} alt='React.js logo' height={40} width={40} />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full absolute"
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "35vw", y: "-20vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Js} alt='JavaScript logo' height={40} width={40} />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full absolute"
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "-30vw", y: "-3vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Html5} alt='HTML5 logo' height={40} width={40} />
                </motion.div>



                <motion.div className="flex items-center justify-center rounded-full absolute"
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "-10vw", y: "-3vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Css3} alt='Css3 logo' height={30} width={30} />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full absolute"
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "10vw", y: "-3vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Csharp} alt='CSharp logo' height={40} width={40} />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full absolute"
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "30vw", y: "-3vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Jquery} alt='jQuery logo' height={50} width={80} />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full absolute"
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "-25vw", y: "15vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Bootstrap} alt='Bootstrap logo' height={40} width={40} />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full absolute"
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "0vw", y: "15vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Framer} alt='Framer logo' height={40} width={40} />
                </motion.div>

                <motion.div className="flex items-center justify-center rounded-full absolute"
                    initial={{x:0, y:0, opacity: 0}}
                    whileInView={{ x: "25vw", y: "15vw", opacity: 1 }}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    >
                    <Image src={Tailwind} alt='TailwindCSS logo' height={60} width={100} />
                </motion.div>
            </div>
        </>
    )
}