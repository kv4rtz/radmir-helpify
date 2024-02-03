import Providres from '@/src/components/global/Providers'
import { ReactNode } from 'react'
import './globals.css'
import 'primereact/resources/themes/lara-dark-green/theme.css'
import 'primeicons/primeicons.css'
import Header from '@/src/components/global/Header/Header'
import Footer from '@/src/components/global/Footer/Footer'
import { Metadata } from 'next'

interface LayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Radmir Helpify',
  description:
    'Памятка Radmir, законодательство, поиск по законодательству Радмир РП',
  keywords:
    'radmir,roleplay,radmirrp,helpify,законка,законодательство,поиск,rp,радмир,законодательство радмир, радмир рп, radmir rp законка, radmir законка, радмир законка, радмир законодательство,памятка радмир, радмир гта 5, гта 5, законка гта 5,radmir helpify',
  creator: 'kvarcev',
  authors: { name: 'kvarcev', url: 'https://vk.com/kv4rtz' },
  robots: 'index, follow',
  manifest: './manifest.webmanifest',
  themeColor: '#121212',
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </head>
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
