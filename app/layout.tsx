import { Nunito } from 'next/font/google'
import './globals.css'

const inter = Nunito({ subsets: ['latin'] })
import Navbar from "./components/navbar/Navbar";
import ClientOnly from './components/ClientOnly';
// import Modal from './components/modals/Modal';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModals';
import getCurrentUser from './actions/getCurrentUser';

export const metadata= {
  title: 'Airbnb',
  description: 'Airbnb clone',
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          {/* <Modal actionLabel='Submit' title='hello world' isOpen /> */}
            <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
