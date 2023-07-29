'use client'

import { cx } from '@tszhong0411/utils'
import React from 'react'
import { Rnd } from 'react-rnd'

import { sizes } from '@/lib/constants'
import { useSelection, useSettings } from '@/hooks'

import StyledSelection from '@/ui/selection'

import App from './app'
import ContextMenu from './context-menu'
import { ChromeCloseIcon, SquareIcon, SubtractIcon } from '../icons'

type WallpaperProps = {
  children: React.ReactNode
}

const Desktop = (props: WallpaperProps) => {
  const { children } = props
  const ref = React.useRef<HTMLDivElement>(null)
  const { desktop } = useSettings()
  const [focused, setFocused] = React.useState<number>()

  const { isSelecting, selectionStyle, selectionEvents } = useSelection(ref)

  return (
    <>
      <ContextMenu>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div
          role='button'
          tabIndex={0}
          className={cx(
            'grid h-[calc(100vh-var(--taskbar-height))] w-full cursor-default grid-flow-col focus:outline-none',
            isSelecting && 'overflow-hidden'
          )}
          style={{
            gridTemplateColumns: `repeat(auto-fill, ${
              sizes.desktop[desktop.iconSize].iconContainer.width
            }px)`,
            gridTemplateRows: `repeat(auto-fill, ${
              sizes.desktop[desktop.iconSize].iconContainer.height
            }px)`,
            rowGap: sizes.desktop[desktop.iconSize].rowGap,
          }}
          ref={ref}
          onClick={() => setFocused(undefined)}
          {...selectionEvents}
        >
          {/* Apps / Shortcuts */}
          {desktop.showDesktopIcons &&
            Array.from(Array(10).keys()).map((_, i) => (
              <App
                key={_}
                onClick={(e) => {
                  e.stopPropagation()

                  setFocused(i)
                }}
                focused={i === focused}
              />
            ))}
          {/* Selection */}
          {isSelecting && <StyledSelection style={selectionStyle} />}
        </div>
      </ContextMenu>
      <Rnd
        default={{
          x: 0,
          y: 0,
          width: 200,
          height: 200,
        }}
        className='z-[1000] select-none rounded-[7px] border border-[--surface-stroke-default]'
        enableUserSelectHack={false}
        dragHandleClassName='handle'
        resizeHandleClasses={{
          bottom: '!cursor-ns-resize',
          bottomLeft: '!cursor-nesw-resize',
          bottomRight: '!cursor-nwse-resize',
          left: '!cursor-ew-resize',
          right: '!cursor-ew-resize',
          top: '!cursor-ns-resize',
          topLeft: '!cursor-nwse-resize',
          topRight: '!cursor-nesw-resize',
        }}
        minHeight={32}
        minWidth={145}
      >
        <div className='mica flex h-8 w-full justify-end rounded-t-[7px]'>
          <div className='handle w-full' />
          <div className='flex'>
            <button className='flex h-8 w-[46px] cursor-default items-center justify-center hover:bg-[--subtle-secondary]'>
              <SubtractIcon width={10} height={10} />
            </button>
            <button className='flex h-8 w-[46px] cursor-default items-center justify-center hover:bg-[--subtle-secondary]'>
              <SquareIcon width={10} height={10} />
            </button>
            <button className='group flex h-8 w-[46px] cursor-default items-center justify-center rounded-tr-[7px] hover:bg-[#c42b1c]'>
              <ChromeCloseIcon
                width={10}
                height={10}
                className='group-hover:text-white'
              />
            </button>
          </div>
        </div>
        <div className='h-[calc(100%-32px)] w-full rounded-b-[7px]'></div>
      </Rnd>
      {children}
    </>
  )
}

export default Desktop
