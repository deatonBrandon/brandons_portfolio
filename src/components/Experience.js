"use client"

import { useScroll, motion } from 'framer-motion'
import { useRef } from 'react'

const Details = ({position, company, url, time, address, work}) => {
    return (
        <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col text-left">

            <motion.div
            initial={{y: 50, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5, type: "spring"}}
            >
                <h3 className="capitalize font-bold text-xl lg:text-2xl">{position}&nbsp;<a href={url} target="_blank" className="text-red-400 dark:text-[#7876FD] capitalize">@&nbsp;{company}</a></h3>
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
            offset: ["start end", "start start"]
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

                <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-1 w-[4px] h-full bg-black dark:bg-light origin-top" />

                    <ul className="w-full flex flex-col items-start justify-between ml-4">
                        <Details
                            position="Software Development Tutor" company="CWI" url='https://cwi.edu/' time="Jan. 2024 - May 2024" address="Nampa, ID" work="Position offered through a recommendation by the 2nd year professor.
                            Helped tutor a class of 19 students learn the fundamentals of C#/Windows Forms and web development using HTML5/CSS3.
                            Skilled in collaborating with the teacher to find more effective ways to communicate concepts and code."                        
                        />
                        <Details
                            position="Web Designer" company="MindHome" url='https://www.mindhome.co/' time="May 2023 - Aug. 2023" address="Remote" work="Collaborated with a team of 3 to create web layouts and creative designs through Figma and transferred to builder.io (standard HTML).
                            Acquired methodical experience in the agile development cycle.
                            Developed skill and knowledge in designing two core web pages, -Service Home- and -Smart Home-, hosted on the official site:
                            mindhome.co."
                        />
                        <Details
                            position="Project Manager" company="Final Mile Solar" url='https://www.finalmilesolar.com/' time="Sept. 2019 - Jan. 2022" address="Arlington, TX" work="Provided exemplary customer and client satisfaction through open communication and safety-first services handling solar panel deliveries.
                            Obtained comprehensive experience in managing, training, warehousing, communication, DEI.
                            Skilled in field training, planning, coordinating, and executing all aspects of the delivery process."
                        />
                    </ul>
            </div>
        </div>
    )
}