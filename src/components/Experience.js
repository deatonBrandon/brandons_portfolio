"use client"

import { useScroll, motion } from 'framer-motion'
import { useRef } from 'react'

const Details = ({position, company, companyLink, time, address, work}) => {
    return (
        <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col text-left">

            <motion.div
            initial={{y: 50, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5, type: "spring"}}
            >
                <h3 className="capitalize font-bold text-xl lg:text-2xl">{position}&nbsp;<a href={companyLink} target="_blank" className="text-red-400 dark:text-[#7876FD] capitalize">@&nbsp;{company}</a></h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light">
                    {time} | {address}
                </span>
                <p className="font-medium text-sm lg:text-base w-full">
                    {work}
                </p>

            </motion.div>

        </li>
    )
}

export default function Experience() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <div>
            <motion.h2
            initial={{y: 50, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true, amount: 0.8}}
            transition={{duration: 1}}
            className="font-bold text-6xl md:text-8xl mb-32 w-full text-center">
                Experience
            </motion.h2>

            <div ref={ref} className="w-[75%] mx-auto relative">

                <motion.div
                style={{scaleY: scrollYProgress}}
                className="absolute left-9 top-1 w-[4px] h-full bg-black origin-top" />

                    <ul className="w-full flex flex-col items-start justify-between ml-4">
                        <Details
                            position="Career Technical Education Ambassador" company="CWI" companyLink="www.cwi.edu" time="2022 - Present" address="Nampa, ID" work="Working in a small team to provide insight and assistance of entering CTE vocations such as HVAC, Automotive, etc. to dual
                            credit/high school students. Provide full range of services, includes event hosting, event scheduling, B2P data logging via
                            Insightly, and service marketing."                        
                        />
                        <Details
                            position="Project Manager" company="Final Mile Solar" companyLink="www.finalmilesolar.com" time="2019 - 2022" address="Arlington, TX" work="Inhouse & field management. Responsible for training, route scheduling, and client relations."
                        />
                        <Details
                            position="Web Developer Intern" company="MindHome" companyLink="www.mindhome.co" time="2022 - 2023" address="Remote" work="Assisted with web design and prepared prototypes to be
                            hosted on the official site"
                        />
                    </ul>

            </div>
        </div>
    )
}