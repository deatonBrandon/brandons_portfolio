import '@/styles/globals.css'
import Providers from '@/components/Providers'

export const metadata = {
    title: 'Portfolio | Projects ',
    description: 'A portfolio designed to showcase recent projects & skills.',
  }

export default function RootLayout({children}) {
    return (
      <Providers>
        <main className="dark:bg-[#4db1ff] dark:text-dark">{children}</main>       
      </Providers>
    )
  }
  