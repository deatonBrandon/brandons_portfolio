import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Loading from './projects/loading'
import { Suspense } from 'react'

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
          <body className={`mt-20 dark:bg-[#4db1ff] dark:text-dark ${monty.variable} font-monty`}>
            <Navbar />
              <main>{children}</main>
              <Suspense fallback={<Loading />} />
            <Footer />
          </body>
        </html>
  )
}
