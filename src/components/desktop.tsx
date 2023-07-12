'use client'

import { cx } from '@tszhong0411/utils'
import React from 'react'

type WallpaperProps = {
  children: React.ReactNode
}

type Position = {
  x: number
  y: number
}

const Desktop = (props: WallpaperProps) => {
  const { children } = props
  const ref = React.useRef<HTMLDivElement>(null)
  const [startPosition, setStartPosition] = React.useState<Position | null>(
    null
  )
  const [endPosition, setEndPosition] = React.useState<Position | null>(null)
  const [isSelecting, setIsSelecting] = React.useState(false)

  React.useEffect(() => {
    const refValue = ref.current

    const mouseDownHandler = (e: MouseEvent) => {
      if (refValue && (e.target as HTMLElement).dataset.id === 'desktop') {
        setIsSelecting(true)
        setStartPosition({
          x: e.clientX,
          y: e.clientY,
        })
      }
    }

    const mouseMoveHandler = (e: MouseEvent) => {
      if (isSelecting) {
        setEndPosition({
          x: e.clientX,
          y: e.clientY,
        })
      }
    }

    const mouseUpHandler = () => {
      if (isSelecting) {
        setIsSelecting(false)
        setStartPosition(null)
        setEndPosition(null)
      }
    }

    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)

    if (refValue) {
      refValue.addEventListener('mousedown', mouseDownHandler)
    }

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler)
      document.removeEventListener('mouseup', mouseUpHandler)

      if (refValue) {
        refValue.removeEventListener('mousedown', mouseDownHandler)
      }
    }
  }, [isSelecting])

  return (
    <div
      ref={ref}
      className={cx(
        'min-h-screen min-w-[100vw] bg-cover bg-center bg-no-repeat',
        isSelecting && 'overflow-hidden'
      )}
      style={{
        backgroundImage: 'url(/static/images/wallpaper.jpg)',
      }}
      data-id='desktop'
    >
      {children}

      {/* Selection */}
      {isSelecting && startPosition && endPosition && (
        <span
          style={{
            width: `${Math.abs(endPosition.x - startPosition.x)}px`,
            height: `${Math.abs(endPosition.y - startPosition.y)}px`,
            transform: `translate(${
              endPosition.x < startPosition.x ? endPosition.x : startPosition.x
            }px, ${
              endPosition.y < startPosition.y ? endPosition.y : startPosition.y
            }px)`,
          }}
          className='block select-none border border-[#006ec6] bg-blue-500/30'
        ></span>
      )}
    </div>
  )
}

export default Desktop
