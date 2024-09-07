'use client'

import { useKey } from 'react-use'

import Calendar from '@/components/apps/calendar'
import QuickSettings from '@/components/apps/quick-settings'
import StartMenu from '@/components/apps/start-menu'
import Widgets from '@/components/apps/widgets'
import Desktop from '@/components/desktop'
import Taskbar from '@/components/taskbar'
import { useIsMounted, useStartMenu } from '@/hooks'

const Home = () => {
  const isMounted = useIsMounted()
  const { open, setOpen } = useStartMenu()

  useKey(
    'Meta',
    () => {
      setOpen(!open)
    },
    {},
    [open]
  )

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
