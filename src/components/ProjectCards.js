"use client"

import Link from "next/link"
import Image from "next/image"
import { GithubIcon } from "@/components/Icons"

export default function ProjectCard({summary, title, type, img, link, github}) {
    return (
            <section className="group p-4">
                <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden">
                    <Image priority src={img} alt={title} className="w-full h-60 rounded-lg drop-shadow-lg" />
                </Link>
                <div className="w-full flex flex-col items-center justify-between mt-4 text-center">
                    <span className="w-full text-blue-400/75 dark:text-light font-medium text-xl">{type}</span>
                    <Link href={link} target="_blank">
                        <p className="text-center text-medium font-semibold">{summary}</p>
                    </Link>
                    <div className="w-full mt-2 flex items-center justify-between">
                        <Link href={link} target="_blank" className="text-lg font-semibold underline underline-offset-2 cursor-pointer">Visit</Link>
                        <Link href={github} target="_blank" className="w-8"><GithubIcon/>{" "}</Link>
                    </div>
                </div>
            </section>
    )
}