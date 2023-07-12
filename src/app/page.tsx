'use client'

import React from 'react'

import Calendar from '@/components/apps/calendar'
import QuickSettings from '@/components/apps/quick-settings'
import Widgets from '@/components/apps/widgets'
import Desktop from '@/components/desktop'
import Taskbar from '@/components/taskbar'

const Home = () => {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => setIsMounted(true), [])

  if (!isMounted) return <p>Loading ...</p>

  return (
    <>
      <Desktop>
        <Widgets />
        <QuickSettings />
        <Calendar />
      </Desktop>
      <Taskbar />
    </>
  )
}

export default Home
