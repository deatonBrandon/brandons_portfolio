import AnimatedText from "@/components/AnimatedText"
import nextJsBlog from "../../../public/nextjsblog.png"
import firstProject from '../../../public/firstsemesterproject.png'
import jsPortfolio from '../../../public/jsportfolio.png'
import vueProject from '../../../public/vueproject.png'
import ProjectCard from "@/components/ProjectCards"
import TransitionEffect from "@/components/TransitionEffect"

export default function page() {
    return (
        <div>
            <TransitionEffect />
            <main className='flex flex-col items-center justify-center overflow-x-hidden'>
                <AnimatedText text="practicality of the design"/>
                <div className="grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-2 lg:gap-10 lg:w-[70%] mt-10 lg:mt-28">
                    <div className="lg:col-start-2 lg:col-span-2 border dark:border-dark rounded-lg transform transition duration-300 hover:bg-blue-900/90 dark:hover:bg-[#7876FD] hover:text-light">
                        <ProjectCard
                            summary="Full-stack React/Next.js blog hosted through Vercel."
                            title="LinkedIn Learning Next.js/Vercel Blog App"
                            img={nextJsBlog}
                            link="https://nextjs-blog-enjoi93.vercel.app/"
                            github="https://github.com/enjoi93/nextjs-blog"
                            type="Next.js | Vercel | JavaScript"
                        />
                    </div>
                    <div className="lg:col-span-2 my-4 lg:my-0 border dark:border-dark rounded-lg transform transition duration-300 hover:bg-blue-900/90 dark:hover:bg-[#7876FD] hover:text-light">
                        <ProjectCard
                            summary="Vue.js (front-end) app demonstrating a basic understanding."
                            title="Vue project"
                            img={vueProject}
                            link="https://codesandbox.io/s/vue-final-final-er3s35?file=/src/App.vue"
                            github="https://github.com/enjoi93/vueProject"
                            type="Vue.js"
                        />
                    </div>
                    <div className="lg:row-start-2 lg:col-start-2 lg:col-span-2 mb-4 lg:mb-0 border dark:border-dark rounded-lg transform transition duration-300 hover:bg-blue-900/90 dark:hover:bg-[#7876FD] hover:text-light">
                        <ProjectCard
                            summary="This portfolio displays GreenSock animations and responsive web design."
                            title="1st big project"
                            img={jsPortfolio}
                            link="https://enjoi93.github.io/jsPortfolio/index.html"
                            github="https://github.com/enjoi93/JSPortfolio"
                            type="JavaScript | jQuery | GreenSock"
                        />
                    </div>
                    <div className="lg:row-start-2 lg:col-start-4 lg:col-span-2 border dark:border-dark rounded-lg transform transition duration-300 hover:bg-blue-900/90 dark:hover:bg-[#7876FD] hover:text-light">
                        <ProjectCard
                            summary="The first school project to display basic HTML & CSS knowledge."
                            title="1st semester project"
                            img={firstProject}
                            link="https://enjoi93.github.io/portfolio/index.html"
                            github="https://github.com/enjoi93/firstproject"
                            type="HTML5 | CSS3"
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}