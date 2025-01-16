"use client"

import AnimatedText from "@/components/AnimatedText";
import { AnimatedNumbers } from "@/components/AnimatedNumbers";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { motion } from "framer-motion";

export default function page() {
    return (
        <>
        <main className="w-full flex flex-col items-center justify-center">
            
            <AnimatedText text="my greatest journey" className="mb-16"/>

            <div className="lg:grid w-11/12 grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-16 flex flex-col">
                <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                transition={{ type: "spring" }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{once: true}}
                className="lg:col-span-3 col-span-4 text-center lg:text-left flex flex-col justify-start order-2 lg:order-none p-6 lg:p-0 antialiased">
                    <h2 className="mb-4 font-semibold lg:text-left text-dark/60">Believing is seeing...</h2>
                    <p className="font-medium">
                        The man you are reading about did not dream of becoming a software dev when he was little.
                        There was only a kid having fun, devoting time to learn how to modify software so that I could add cool unrelatable themes to my Playstation Portable (like the xbox boot animation).
                        To be fair, I was dedicating most of my energy into skateboarding and the upcoming soccer season.
                    </p>
                    <p className="my-4 font-medium">
                        Software development revealed itself after a decade of searching for that fulfilling career, with daily challenges requiring creativity and solutions strengthening the love for this cycle.
                        I believe design is about more than just making things look good - it runs deep in creating the intuitive, enjoyable experiences that users go after and stick around for.
                        My process is a fluent, perpetual motion of planning to deployment, rippled in user trends and dateless functionality that I consistently improve to share with everyone.
                    </p>
                    <p className="font-medium">
                         When I get time to myself outside of coding, my favorite hobby is mountain biking. I am connected to local groups on Facebook and casually explore trails throughout the city. If it&apos;s not the ramps and tight corners that keep me there, it is the freedom of travel that makes this sport consistently fun. I&apos;ll even bring my GoPro to keep the memories alive! 
                    </p>
                </motion.div>

                <div className="col-span-9 lg:col-span-3 flex flex-row lg:flex-col items-start lg:items-end justify-center lg:justify-between order-3">
                    <div className="flex flex-col items-center justify-center">
                        <span className="flex justify-center text-4xl md:text-6xl lg:text-7xl font-bold">
                            <AnimatedNumbers value={20} />+
                        </span>
                        <h2 className="text-md md:text-lg lg:text-xl text-center w-[70%] lg:w-full font-medium capitalize text-dark/75 dark:text-light">projects completed</h2>
                    </div>
                        
                    <div className="flex flex-col items-center justify-center">
                        <span className="flex text-4xl md:text-6xl lg:text-7xl ml-7 w-full justify-center font-bold">
                        <AnimatedNumbers value={2} />+
                        </span>
                        <h2 className="text-md md:text-lg lg:text-xl font-medium text-center w-[70%] lg:w-full capitalize text-dark/75 dark:text-light">years of experience</h2>
                    </div>
                </div>

            </div>

            <Skills />
            <Experience />
            <Education />

        </main>
        </>
    )
}