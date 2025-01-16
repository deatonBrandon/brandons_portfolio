"use client"

import Link from "next/link";
import { CircularText } from "./Icons";
import {motion} from 'framer-motion'

const MotionLink = motion(Link)

export default function HireMe() {
    return (
        <div className="lg:fixed left-4 bottom-32 flex items-center justify-center overflow-hidden">
            <div className="w-48 h-auto flex items-center justify-center relative">
                <CircularText className={"fill-black animate-spin-slow"}/>

                <MotionLink href="mailto:dream.cloud936@gmail.com" className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-light shadow-lg border border-transparent dark:hover:drop-shadow-md w-20 h-20 rounded-full font-semibold transform transition duration-300 hover:bg-white dark:hover:bg-teal-500"
                whileHover={{
                    backgroundColor:["#121212", "rgba(80, 111, 255, 1)","rgba(253,29,29,1)","rgba(193, 255, 133, 1)","rgba(131,58,180,1)", "#121212"],
                    transition:{duration:1.5, repeat: Infinity}
                }}
                >Hire Me</MotionLink>
            </div>
        </div>
    )
}