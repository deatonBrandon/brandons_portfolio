import AnimatedText from "@/components/AnimatedText"
import bbManager from "../../../public/bbManager.png"
import degreeMgr from '../../../public/datacleaning.png'
import capstoneProject from '../../../public/CapstoneScrumProject.png'
import usedCars from '../../../public/usedcars.png'
import ProjectCard from "@/components/ProjectCards"
import pasta from "../../../public/pastaworksheet.png"
import journal from "../../../public/incident.png"

export default function page() {
    return (
        <div>
            <main className='flex flex-col items-center justify-center'>
                <AnimatedText text="my projects" />
                <div className="grid grid-cols-1 mx-12 lg:grid-cols-6 lg:grid-rows-3 lg:gap-6 mt-10">
                    <div className="lg:col-start-2 lg:col-span-2 mb-4 lg:mb-0">
                        <ProjectCard
                            summary="This worksheet demonstrates the use of P.A.S.T.A., (The Process for Attack Simulation and Threat Analysis)"
                            title="PCI-DSS compliance for Sneaker Company"
                            img={pasta}
                            link="/pasta.pdf"
                            github="https://github.com/deatonBrandon"
                            type="Threat Analysis"
                        />
                    </div>
                    <div className="lg:col-start-4 lg:col-span-2 mb-4 lg:mb-0">
                        <ProjectCard
                            summary="Most recent journal entry concerning a trojan virus discovered using a hash value"
                            title="Identifying malicious email attachments"
                            img={journal}
                            link="/pasta.pdf"
                            github="https://github.com/deatonBrandon"
                            type="SHA256 Hash Lookup"
                        />
                    </div>
                    <div className="lg:col-start-2 lg:col-span-2 mb-4 lg:mb-0">
                        <ProjectCard
                            summary="Baseball management app that saves and edits players in a sqlite database."
                            title="Baseball manager application"
                            img={bbManager}
                            link="https://github.com/deatonBrandon/python_projects.github.io/tree/main/baseball_mgr"
                            github="https://github.com/deatonBrandon/python_projects.github.io/tree/main/baseball_mgr"
                            type="Python | SQLite3 | TKinter"
                        />
                    </div>
                    <div className="lg:col-start-4 lg:col-span-2 mb-4 lg:mb-0">
                        <ProjectCard
                            summary=".NET MAUI full-stack final project using Apache server with json data fetching."
                            title=".NET MAUI project"
                            img={usedCars}
                            link="https://github.com/deatonBrandon/UsedCarsFinalProject"
                            github="https://github.com/deatonBrandon/UsedCarsFinalProject"
                            type=".NET MAUI MVC"
                        />
                    </div>
                    <div className="lg:col-start-2 lg:col-span-2 mb-4 lg:mb-0">
                        <ProjectCard
                            summary="Capstone class project developed using modern scrum management practices."
                            title="Capstone Project"
                            img={capstoneProject}
                            link="https://github.com/robbysabo/SWDV280CapstoneProject/tree/main/ScrumProject"
                            github="https://github.com/robbysabo/SWDV280CapstoneProject/tree/main/ScrumProject"
                            type="ASP.NET MVC | SQL"
                        />
                    </div>
                    <div className="lg:col-start-4 lg:col-span-2 mb-4 lg:mb-0">
                        <ProjectCard
                            summary="This program takes specific .csv files from HandShake to reorganize and create anew."
                            title="Project for Work-based Learning Center, CWI"
                            img={degreeMgr}
                            link="https://github.com/deatonBrandon/DegreeManager/blob/main/automateCSV.py"
                            github="https://github.com/deatonBrandon/DegreeManager"
                            type="Python | Pandas.py"
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}