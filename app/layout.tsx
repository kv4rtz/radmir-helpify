import Providres from '@/src/components/global/Providers'
import { ReactNode } from 'react'
import './globals.css'
import 'primereact/resources/themes/lara-dark-green/theme.css'
import 'primeicons/primeicons.css'
import Header from '@/src/components/global/Header/Header'
import Footer from '@/src/components/global/Footer/Footer'

interface LayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="ru">
      <body className="flex flex-col min-h-screen">
        <Providres>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providres>
      </body>
    </html>
  )
}
