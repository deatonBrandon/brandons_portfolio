"use client"

import { useScroll, motion } from 'framer-motion'
import { useRef } from 'react'

const Details = ({ type, time, place, info}) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col">

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
                <p className="font-medium text-sm lg:text-base w-full">
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
            offset: ["start end", "start center"]
        }
    )

    return (
        <div className="my-32">
            <motion.h2 
            initial={{y: 50, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true, amount: 0.8}}
            transition={{duration: 1}}
            className="font-bold text-6xl lg:text-8xl mb-32 w-full text-center">
                Education
            </motion.h2>

            <div ref={ref} className="w-[75%] mx-auto relative">

                <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-1 w-[4px] h-full bg-black dark:bg-light origin-top" />

                    <ul className="w-full flex flex-col items-start justify-between ml-4">
                        <Details
                            type="Google Cybersecurity Certificate" time="2024" place="Coursera" info="Develop essential skills to protect devices, networks, and data using SIEM tools. 
                            Advance my knowledge in SQL, Python, and Linux using isolated environments. 
                            Learn to identify common threats, risks, and vulnerabilities and techniques to mitigate them. 
                            Understand of the importance of cybersecurity practices and their impact on organizations."
                        />
                        <Details
                            type="Associate of Applied Sciences" time="2022 - 2024" place="College of Western Idaho" info="Client-Side Frameworks - Comprehensive application of client-side scripting tech and frameworks. Emphasis is placed on creating UI and
                            connecting software components (ReactJS, VueJS, Vite, Svelte).
                            Collaborative Development - Class introduction to formal test strategies, collaborative tools, and project management. Our capstone
                            project was developed using modern scrum practices (Jira - project mgmt., ASP.NET MVC, SQL Server). I played the role of UI/UX designer
                            that served as a color palette and layout standard across the website.
                            Advanced Web App Development - Exploring dynamic websites focusing on e-commerce and server-side scripting (SQL Server, SQLite3,
                            and ASP.NET Core MVC)."                   
                        />
                        <Details
                            type="High School Diploma" time="2007 - 2011" place="Cherry Creek High School" info="Elective in AutoCAD. Team sports - soccer, right midfield."               
                        />
                    </ul>

            </div>
        </div>
    )
}