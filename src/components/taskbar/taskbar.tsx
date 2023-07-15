'use client'

import { cx } from '@tszhong0411/utils'

import Apps from './apps'
import SystemTray from './system-tray'
import Widgets from './widgets'

const Taskbar = () => {
  return (
    <div
      className={cx(
        'absolute bottom-0 left-0 right-0 z-50 flex h-12 min-w-[100vw] items-center justify-between bg-[#eeeeee] pl-[3px]',
        'before:absolute before:left-0 before:right-0 before:top-0 before:h-px before:w-full before:bg-[#bebebe] before:content-[""]'
      )}
    >
      <Widgets />
      <Apps />
      <SystemTray />
    </div>
  )
}

export default Taskbar
