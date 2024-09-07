'use client'

import { cn } from '@tszhong0411/utils'
import Image from 'next/image'
import { forwardRef } from 'react'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip'

import { type TaskbarApp } from './apps'

type AppProps = {
  isDragging?: boolean
} & TaskbarApp &
  React.ComponentPropsWithoutRef<'button'>

const App = forwardRef<HTMLButtonElement, AppProps>((props, ref) => {
  const { name, id, isDragging = false, active = false, tooltip, ...rest } = props

  return (
    <Tooltip delayDuration={1000} open={tooltip ? undefined : false}>
      <TooltipTrigger asChild>
        <button
          className={cn(
            'group relative flex size-10 cursor-default items-center justify-center rounded border border-transparent bg-clip-padding',
            !isDragging && 'hover:bg-white/70 hover:before:bg-gradient',
            isDragging && 'z-10',
            active && 'bg-white/70 before:bg-gradient',
            'before:absolute before:inset-0 before:-z-10 before:-m-px before:rounded-[inherit] before:opacity-30'
          )}
          ref={ref}
          type='button'
          {...rest}
        >
          <Image
            src={`/images/apps/${id}/icon.png`}
            className={cn(
              'select-none transition-transform duration-300',
              !isDragging && 'group-active:scale-75',
              isDragging && 'group-active:scale-110'
            )}
            width={24}
            height={24}
            draggable={false}
            alt={name}
            quality={100}
          />
        </button>
      </TooltipTrigger>
      <TooltipContent sideOffset={18}>
        <span>{tooltip}</span>
      </TooltipContent>
    </Tooltip>
  )
})

App.displayName = 'App'

export default App
