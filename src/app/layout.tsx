import { cn } from '@tszhong0411/utils'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import '@/styles/globals.css'

import Providers from './providers'

const segoeUI = localFont({
  src: '../../public/fonts/segoe-ui.ttf',
  variable: '--font-segoe-ui',
  display: 'swap'
})

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL('https://win11.honghong.me'),
  title: 'Windows 11 Web'
}

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props

  return (
    <html lang='en-US' className={cn(segoeUI.variable, 'scroll-smooth antialiased')}>
      <body
        className='min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat font-default'
        style={{
          backgroundImage: 'url(/images/wallpaper.jpg)'
        }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
