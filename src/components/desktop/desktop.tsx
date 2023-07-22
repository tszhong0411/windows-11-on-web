'use client'

import { cx } from '@tszhong0411/utils'
import React from 'react'

import App from './app'
import ContextMenu from './context-menu'

type WallpaperProps = {
  children: React.ReactNode
}

type Position = {
  x: number
  y: number
}

const Desktop = (props: WallpaperProps) => {
  const { children } = props
  const [position, setPosition] = React.useState<{
    start: Position | null
    end: Position | null
  }>({
    start: null,
    end: null,
  })
  const [isSelecting, setIsSelecting] = React.useState(false)

  const mouseDownHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button === 2 || e.button === 1) return

    setIsSelecting(true)
    setPosition({
      start: {
        x: e.clientX,
        y: e.clientY,
      },
      end: null,
    })
  }

  const mouseMoveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isSelecting) return

    setPosition((prev) => ({
      ...prev,
      end: {
        x: e.clientX,
        y: e.clientY,
      },
    }))
  }

  const mouseUpHandler = () => {
    if (!isSelecting) return

    setIsSelecting(false)
    setPosition({
      start: null,
      end: null,
    })
  }

  return (
    <>
      <ContextMenu>
        <div
          role='button'
          tabIndex={0}
          className={cx(
            'min-h-screen min-w-[100vw] cursor-default bg-cover bg-center bg-no-repeat focus:outline-none',
            isSelecting && 'overflow-hidden'
          )}
          style={{
            backgroundImage: 'url(/static/images/wallpaper.jpg)',
          }}
          onMouseDown={mouseDownHandler}
          onMouseMove={mouseMoveHandler}
          onMouseUp={mouseUpHandler}
        >
          <div className='flex flex-wrap'>
            <App />
          </div>
          {/* Selection */}
          {isSelecting && position.start && position.end && (
            <div
              style={{
                width: Math.abs(position.end.x - position.start.x),
                height: Math.abs(position.end.y - position.start.y),
                left: Math.min(position.start.x, position.end.x),
                top: Math.min(position.start.y, position.end.y),
              }}
              className='absolute select-none border border-[#006ec6] bg-blue-500/30'
            ></div>
          )}
        </div>
      </ContextMenu>
      {children}
    </>
  )
}

export default Desktop
