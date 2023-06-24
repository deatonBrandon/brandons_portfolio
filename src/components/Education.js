"use client"

import { useScroll, motion } from 'framer-motion'
import { useRef } from 'react'

const Details = ({ type, time, place, info}) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className="first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col">

            <motion.div
            initial={{y: 50, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5, type: "spring"}}
            >
                <h3 className="capitalize font-bold text-xl lg:text-2xl">{type}</h3>
                <span className="capitalize font-medium text-black/75 dark:text-white">
                    {time} | {place}
                </span>
                <p className="font-medium text-sm lg:text-base w-full mb-20">
                    {info}
                </p>

            </motion.div>
        </li>
    )
}

export default function Education() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "end center"]
        }
    )

    return (
        <div className="my-32">
            <motion.h2 
            initial={{y: 50, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true, amount: 0.8}}
            transition={{duration: 1}}
            className="font-bold text-6xl md:text-8xl mb-32 w-full text-center">
                Education
            </motion.h2>

            <div ref={ref} className="w-[75%] mx-auto relative">

                <motion.div
                style={{scaleY: scrollYProgress}}
                className="absolute left-9 top-1 w-[4px] h-full bg-black origin-top" />

                    <ul className="w-full flex flex-col items-start justify-between ml-4 mb-15">
                        <Details
                            type="Associate of Applied Sciences" time="2022 - Present" place="College of Western Idaho" info="Relevant Coursework: System Analysis and Design, Client/Server-Side Frameworks, Object-Oriented Programming, Data Structures. Certified as an I.T specialist in HTML5 app development. "                   
                        />
                        <Details
                            type="High School Diploma" time="2007 - 2011" place="Cherry Creek High School" info="Relevant Coursework: Intro to Trigonometry"                   
                        />
                    </ul>

            </div>
        </div>
    )
}