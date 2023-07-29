import React from 'react'

type Position = {
  x: number
  y: number
}

export const useSelection = (
  ref: React.MutableRefObject<HTMLElement | null>
) => {
  const [isSelecting, setIsSelecting] = React.useState(false)
  const debounceTimer = React.useRef<number>()

  const [position, setPosition] = React.useState<{
    start: Position | null
    end: Position | null
  }>({
    start: null,
    end: null,
  })

  const mouseDownHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button === 2 || e.button === 1) return
    if (e.target !== ref.current) return

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

    if (!debounceTimer.current) {
      setPosition((prev) => ({
        ...prev,
        end: {
          x: e.clientX,
          y: e.clientY,
        },
      }))
      // Prevent "Maximum update depth exceeded"
      debounceTimer.current = window.setTimeout(() => {
        debounceTimer.current = undefined
      }, 1000 / 60)
    }
  }

  const mouseUpHandler = () => {
    if (!isSelecting) return

    setIsSelecting(false)
    setPosition({
      start: null,
      end: null,
    })
  }

  const selectionStyle = React.useMemo(() => {
    if (!position.start || !position.end) return undefined

    return {
      width: Math.abs(position.end.x - position.start.x),
      height: Math.abs(position.end.y - position.start.y),
      left: Math.min(position.start.x, position.end.x),
      top: Math.min(position.start.y, position.end.y),
    }
  }, [position])

  return {
    isSelecting: isSelecting && position.start && position.end,
    selectionEvents: {
      onMouseDown: mouseDownHandler,
      onMouseMove: mouseMoveHandler,
      onMouseUp: mouseUpHandler,
    },
    selectionStyle,
  }
}
