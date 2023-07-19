import { cx } from '@tszhong0411/utils'
import type { Metadata } from 'next'
import localfont from 'next/font/local'
import '@/styles/globals.css'

import Providers from './providers'

const segoeUI = localfont({
  src: '../../public/static/fonts/segoe-ui.ttf',
  variable: '--font-segoe-ui',
  display: 'swap',
})

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL('https://win11.honghong.me'),
  title: 'Windows 11 on web',
}

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props

  return (
    <html
      lang='en-US'
      className={cx(segoeUI.variable, 'scroll-smooth antialiased')}
    >
      <body className='overflow-hidden font-default'>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
