import '@/styles/globals.css'
import { Analytics } from "@vercel/analytics/react"
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const monty = Montserrat({ subsets: ['latin'], variable: '--font-monty', })

export const metadata = {
  title: 'Portfolio | Home',
  description: 'A portfolio designed to showcase recent projects & skills.',
  script:          
          `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }`,
              
}

export default function RootLayout({ children }) {

  return (
        <html lang="en">
          <body className={`mt-20 dark:bg-[#142036] dark:text-light ${monty.variable} font-monty`}>
            <Navbar />
              <main>
                {children}
                <Analytics />
              </main>
            <Footer />
          </body>
        </html>
  )
}
