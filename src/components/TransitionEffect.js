"use client"

import { motion } from 'framer-motion'

export default function TransitionEffect() {
    return (
        <>
            <motion.div 
            initial={{x: "100%", width: "100%"}}
            animate={{x: "0%", width: "0%"}}
            transition={{duration: 0.5, ease: "easeInOut"}}
            className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-black'
            />
            <motion.div 
            initial={{x: "100%", width: "100%"}}
            animate={{x: "0%", width: "0%"}}
            transition={{delay: 0.2, duration: 0.9, ease: "easeInOut"}}
            className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-gray-900'
            />
            <motion.div 
            initial={{x: "100%", width: "100%"}}
            animate={{x: "0%", width: "0%"}}
            transition={{delay: 0.4, duration: 0.5, ease: "easeInOut"}}
            className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-gray-500'
            />
        </>
    )
}