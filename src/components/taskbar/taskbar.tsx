'use client'

import { cx } from '@tszhong0411/utils'
import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu'

import Apps from './apps'
import SystemTray from './system-tray'
import Widgets from './widgets'
import { SettingsIcon, TaskManagerIcon } from '../icons'

const Taskbar = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [open, setOpen] = React.useState(false)
  const [left, setLeft] = React.useState<number | null>(null)

  /*
    If I use the context menu here, I can't control it.
    Since It should be displayed when the user right-clicks the taskbar instead of apps or system tray.
    Instead, I use a dropdown menu, but I don't know how to set custom positions, so I use this tricky way.
  */
  return (
    <>
      <div
        className={cx(
          'acrylic absolute bottom-0 left-0 right-0 z-50 flex h-12 min-w-[100vw] items-center justify-between pl-[3px]',
          'before:absolute before:left-0 before:right-0 before:top-0 before:h-px before:w-full before:bg-[#bebebe] before:content-[""]'
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
        onOpenChange={(open) => {
          setOpen(open)
          if (!open) setLeft(null)
        }}
      >
        <DropdownMenuTrigger asChild>
          {left && (
            <span
              className='fixed bottom-12'
              style={{
                left,
              }}
            ></span>
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
