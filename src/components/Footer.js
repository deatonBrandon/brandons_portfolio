"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

function Today() {
    let date = new Date();
    let getDate = date.toLocaleString('en-US', {weekday: 'long', month: 'long', year: 'numeric', day: 'numeric'})
    return getDate;
}

export default function Footer() {
    const pageURL = usePathname()
    return (
        <>
            <footer className={`w-full mt-11 font-medium text-lg
             ${pageURL === '/' ? 'md:fixed bottom-0 left-0' : 'relative'}`}>

                <div className="p-3 md:p-8 flex items-center justify-evenly">
                    <Today />
                    <div>
                        Built with <span className="text-pink-300 text-2xl px-1">&#9825;</span> by enjoiy
                    </div>           
                    <Link href="mailto:dream.cloud936@gmail.com" target={"_blank"} className="underline underline-offset-2">Say hello</Link>
                </div>

            </footer>
        </>
    )
}