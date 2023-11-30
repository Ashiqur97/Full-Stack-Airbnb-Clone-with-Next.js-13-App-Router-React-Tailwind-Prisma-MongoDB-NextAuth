import { Nunito } from 'next/font/google'
import './globals.css'

const inter = Nunito({ subsets: ['latin'] })
import Navbar from "./components/navbar/Navbar";

export const metadata= {
  title: 'Airbnb',
  description: 'Airbnb clone',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}