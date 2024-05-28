import '@/styles/globals.css'

export const metadata = {
    title: 'Portfolio | About ',
    description: 'A portfolio designed to showcase recent projects & skills.',
  }

export default function RootLayout({children}) {
    // offset navbar height
    return (
        <>
          <main className='mt-20 dark:bg-[#142036] dark:text-light'>{children}</main>          
        </>
    )
      
  }
  