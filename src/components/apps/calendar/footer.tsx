'use client'

import React from 'react'

import { AddIcon, PlayFilledIcon, SubtractIcon } from '@/components/icons'

import Button from '@/ui/button'

const Footer = () => {
  const [timer, setTimer] = React.useState(30)

  const addTimeHandler = () => {
    setTimer((prev) => {
      if (prev >= 30) return prev + 15
      return prev + 5
    })
  }

  const subtractTimeHandler = () => {
    setTimer((prev) => {
      if (prev <= 30) return prev - 5
      return prev - 15
    })
  }

  return (
    <div className='absolute bottom-0 left-0 right-0 z-10 flex h-[49px] w-full items-center justify-between border-t border-[rgba(0,0,0,0.0803)] bg-[#f2f2f2] px-4'>
      <div className='flex w-[130px] justify-between gap-3'>
        <Button
          onClick={subtractTimeHandler}
          className='flex h-6 w-6 items-center justify-center'
          disabled={timer === 5}
        >
          <SubtractIcon width={12} height={12} />
        </Button>
        <div className='flex items-center justify-center gap-1 text-sm'>
          <div className='font-semibold'>{timer}</div>
          <div className='text-black/80'>mins</div>
        </div>
        <Button
          onClick={addTimeHandler}
          className='flex h-6 w-6 items-center justify-center'
          disabled={timer === 240}
        >
          <AddIcon width={12} height={12} />
        </Button>
      </div>
      <Button className='flex items-center gap-1 px-3 py-1 text-xs'>
        <PlayFilledIcon width={10} height={10} />
        Focus
      </Button>
    </div>
  )
}

export default Footer
