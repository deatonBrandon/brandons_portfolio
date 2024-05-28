"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from 'framer-motion'
import { GithubIcon } from "@/components/Icons"

export default function ProjectCard({summary, title, type, img, link, github}) {
    return (
        <>
            <motion.section className="p-4 border-2 border-dark dark:border-light rounded-lg"
            initial={{ scale: 0.8, opacity: 0.5 }}
            transition={{ type: "spring" }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{scale: 0.98}}
            viewport={{ once: true }}
            >
                <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden">
                    <Image priority src={img} alt={title} className="w-60 h-52 mx-auto lg:w-72 lg:h-60 rounded-lg drop-shadow-lg" />
                </Link>
                <div className="w-full flex flex-col items-center justify-between mt-4 text-center">
                    <span className="w-full text-blue-400/75 dark:text-light font-medium lg:text-xl">{type}</span>
                    <Link href={link} target="_blank">
                        <p className="text-center text-medium font-semibold">{summary}</p>
                    </Link>
                    <div className="w-full mt-2 flex items-center justify-between">
                        <Link href={link} target="_blank" className="lg:text-lg font-semibold underline underline-offset-2 cursor-pointer">Visit</Link>
                        <Link href={github} target="_blank" className="w-8"><GithubIcon/>{" "}</Link>
                    </div>
                </div>
            </motion.section>
        </>
    )
}