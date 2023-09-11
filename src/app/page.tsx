'use client'

import React from 'react'
import { useKey } from 'react-use'

import Calendar from '@/components/apps/calendar'
import QuickSettings from '@/components/apps/quick-settings'
import StartMenu from '@/components/apps/start-menu'
import Widgets from '@/components/apps/widgets'
import Desktop from '@/components/desktop'
import Taskbar from '@/components/taskbar'
import { useStartMenu } from '@/hooks'

const Home = () => {
  const [isMounted, setIsMounted] = React.useState(false)
  const { open, setOpen } = useStartMenu()

  React.useEffect(() => setIsMounted(true), [])

  useKey('Meta', () => setOpen(!open), {}, [open])

  if (!isMounted) return <p>Loading ...</p>

  return (
    <>
      <Desktop>
        <StartMenu />
        <Widgets />
        <QuickSettings />
        <Calendar />
      </Desktop>
      <Taskbar />
    </>
  )
}

export default Home
