import AnimatedText from "@/components/AnimatedText"
import bbManager from "../../../public/bbManager.png"
import degreeMgr from '../../../public/datacleaning.png'
import jsPortfolio from '../../../public/jsportfolio.png'
import vueProject from '../../../public/vueproject.png'
import ProjectCard from "@/components/ProjectCards"

export default function page() {
    return (
        <div>
            <main className='flex flex-col items-center justify-center'>
                <AnimatedText text="practicality of the design" />
                <div className="grid grid-cols-1 mx-12 lg:grid-cols-6 lg:grid-rows-2 lg:gap-16 mt-10 lg:mt-28">
                    <div className="lg:col-start-2 lg:col-span-2">
                        <ProjectCard
                            summary="Baseball management app that saves and edits players in a sqlite database."
                            title="Baseball manager application"
                            img={bbManager}
                            link="https://github.com/enjoi93/python_projects.github.io/tree/main/baseball_mgr"
                            github="https://github.com/enjoi93/python_projects.github.io/tree/main/baseball_mgr"
                            type="Python | SQLite3 | TKinter"
                        />
                    </div>
                    <div className="lg:col-span-2 my-4 lg:my-0">
                        <ProjectCard
                            summary="Vue.js (front-end) app demonstrating a basic understanding of client-side programming."
                            title="Vue project"
                            img={vueProject}
                            link="https://codesandbox.io/s/vue-final-final-er3s35?file=/src/App.vue"
                            github="https://github.com/enjoi93/vueProject"
                            type="Vue.js"
                        />
                    </div>
                    <div className="lg:row-start-2 lg:col-start-2 lg:col-span-2 mb-4 lg:mb-0">
                        <ProjectCard
                            summary="This portfolio displays 3rd party animations and responsive web design."
                            title="1st big project"
                            img={jsPortfolio}
                            link="https://enjoi93.github.io/jsPortfolio/index.html"
                            github="https://github.com/enjoi93/JSPortfolio"
                            type="JavaScript | jQuery"
                        />
                    </div>
                    <div className="lg:row-start-2 lg:col-start-4 lg:col-span-2">
                        <ProjectCard
                            summary="This program takes specific .csv files from HandShake to reorganize and create anew."
                            title="Project for Work-based Learning Center, CWI"
                            img={degreeMgr}
                            link="https://github.com/enjoi93/DegreeManager/blob/main/automateCSV.py"
                            github="https://github.com/enjoi93/DegreeManager"
                            type="Python | Pandas"
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}