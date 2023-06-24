"use client"

import Link from "next/link"
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

export default function Logo() {
    return (
        <>
            <MotionLink href="/"
                className="flex items-center justify-center w-16 h-16 bg-black text-white rounded-full text-xl font-medium border border-transparent dark:hover:drop-shadow-md"
                whileHover={{
                    backgroundColor:["#121212", "rgba(80, 111, 255, 1)","rgba(253,29,29,1)","rgba(193, 255, 133, 1)","rgba(131,58,180,1)", "#121212"],
                    transition:{duration:1.5, repeat: Infinity}
                }}
                
                    >enjoiy</MotionLink>
        </>
    )
}