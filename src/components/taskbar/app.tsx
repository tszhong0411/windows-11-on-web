'use client'

import { cx } from '@tszhong0411/utils'
import Image from 'next/image'
import React from 'react'

import { TaskbarApp } from '@/config'

type AppProps = {
  isDragging?: boolean
} & TaskbarApp &
  React.ComponentPropsWithoutRef<'button'>

const App = React.forwardRef<HTMLButtonElement, AppProps>((props, ref) => {
  const { name, id, isDragging = false, ...rest } = props

  return (
    <button
      className={cx(
        'group relative flex h-10 w-10 cursor-default items-center justify-center rounded border border-transparent bg-clip-padding',
        !isDragging && 'hover:bg-white/90 hover:before:bg-gradient',
        isDragging && 'z-10',
        'before:absolute before:inset-0 before:-z-10 before:-m-px before:rounded-[inherit] before:opacity-30'
      )}
      ref={ref}
      {...rest}
    >
      <Image
        src={`/static/images/apps/${id}/icon.png`}
        className={cx(
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
  )
})

App.displayName = 'App'

export default App
