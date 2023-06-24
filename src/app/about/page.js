import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import { AnimatedNumbers } from "@/components/AnimatedNumbers";
import middleDesign from '../../../public/canvaDesign.png'
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

export default function page() {
    return (
        <>
        <TransitionEffect />
        <main className="w-full flex flex-col items-center justify-center overflow-x-hidden">
            
            <AnimatedText text="freedom equals mindset" className="mb-16"/>

            <div className="lg:grid w-11/12 grid-cols-3 lg:grid-cols-9 gap-8 lg:gap-16 flex flex-col">
                <div className="lg:col-span-3 col-span-4 text-center lg:text-left flex flex-col justify-start order-2 lg:order-none p-6 lg:p-0 antialiased">
                    <h2 className="mb-4 font-semibold lg:text-left text-dark/60">Believing is seeing...</h2>
                    <p className="font-medium">
                        The man you are reading about did not dream of becoming a software dev when he was in middle school.
                        There was only a kid having fun, devoting time into learning how to cop free movies and become the villain's worst nightmare in online shooters.
                        To be fair, I was dedicating most of my energy into skateboarding and the upcoming soccer season.
                    </p>
                    <p className="my-4 font-medium">
                        Software development revealed itself, and the problem solving of creative/functional challenges helped me love the process.
                        I believe design is about more than just making things look good - it runs deep in creating the intuitive, enjoyable experiences for the users.
                        My process is a perpetual motion of planning to deployment, rippled in user trends and dateless functionality. 
                    </p>
                    <p className="font-medium">
                        Whether it is working on a website, mobile app, or other digital product, I bring my passion and commitment to design excellence and user-centered thinking
                        to every project I work on. 
                    </p>
            </div>

                <div className="lg:col-span-3 flex justify-center col-span-8 rounded-2xl">
                    <Image priority sizes="(max-width:768) 100vw, (max-width:1200) 50vw, 33vw" quality={100} src={middleDesign} alt="Canva design" className="max-w-[400px] mx-auto lg:w-full lg:max-h-[400px] lg:mx-0 rounded-2xl order-1" />
                </div>

                <div className="col-span-9 lg:col-span-3 flex flex-row lg:flex-col items-start lg:items-end justify-center lg:justify-between order-3">
                    <div className="flex flex-col items-center lg:items-end justify-center">
                        <span className="flex items-center justify-center lg:inline-block text-4xl md:text-6xl lg:text-7xl font-bold">
                            <AnimatedNumbers value={20} />+
                        </span>
                        <h2 className="text-md md:text-lg lg:text-xl text-center w-[70%] lg:w-full font-medium capitalize text-dark/75">projects completed</h2>
                    </div>
                    <div className="flex flex-col items-center lg:items-end justify-center">
                        <span className="inline-block text-4xl md:text-6xl lg:text-7xl mr-4 font-bold">
                        <AnimatedNumbers value={1} />
                        </span>
                        <h2 className="text-md md:text-lg lg:text-xl font-medium text-center w-[70%] lg:w-full capitalize text-dark/75">satisfied client (out of 1 client!)</h2>
                    </div>
                    <div className="flex flex-col items-center lg:items-end justify-center">
                        <span className="inline-block text-4xl md:text-6xl lg:text-7xl ml-7 font-bold">
                        <AnimatedNumbers value={1} />+
                        </span>
                        <h2 className="text-md md:text-lg lg:text-xl font-medium text-center w-[70%] lg:w-full capitalize text-dark/75">years of experience</h2>
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