'use client'

import { cn } from '@tszhong0411/utils'
import { useRef, useState } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/ui/dropdown-menu'

import { SettingsIcon, TaskManagerIcon } from '../icons'
import Apps from './apps'
import SystemTray from './system-tray'
import Widgets from './widgets'

const Taskbar = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [left, setLeft] = useState<number | null>(null)

  /*
    If I use the context menu here, I can't control it.
    Since It should be displayed when the user right-clicks the taskbar instead of apps or system tray.
    Instead, I use a dropdown menu, but I don't know how to set custom positions, so I use this tricky way.
  */
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions -- i don't know */}
      <div
        className={cn(
          'acrylic absolute inset-x-0 bottom-0 z-[9000] flex h-12 min-w-[100vw] items-center justify-between pl-[3px]',
          'before:absolute before:inset-x-0 before:top-0 before:h-px before:w-full before:bg-[#bebebe] before:content-[""]'
        )}
        ref={ref}
        onContextMenu={(e) => {
          e.preventDefault()

          if (e.target === ref.current) {
            setLeft(e.clientX)
            setOpen(true)
          }
        }}
      >
        <Widgets />
        <Apps />
        <SystemTray />
      </div>
      <DropdownMenu
        open={open}
        onOpenChange={(o) => {
          setOpen(o)
          if (!o) setLeft(null)
        }}
      >
        <DropdownMenuTrigger asChild>
          {left !== null && (
            <span
              className='fixed bottom-12'
              style={{
                left
              }}
            />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent side='top' sideOffset={0} align='start'>
          <DropdownMenuItem>
            <TaskManagerIcon width={16} height={16} className='mr-3' />
            Task Manager
          </DropdownMenuItem>
          <DropdownMenuSeparator className='my-0.5' />
          <DropdownMenuItem>
            <SettingsIcon width={16} height={16} className='mr-3' />
            Taskbar settings
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default Taskbar
