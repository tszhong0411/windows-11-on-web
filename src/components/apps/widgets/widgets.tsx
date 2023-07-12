'use client'

import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import { useWidgets } from '@/hooks'

import Button from '@/ui/button'

const Widgets = () => {
  const { open, setOpen } = useWidgets()
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const closeHandler = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node) &&
        !(
          document.querySelector('[data-id=widgets]') as HTMLButtonElement
        ).contains(e.target as Node) &&
        open
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', closeHandler)

    return () => {
      document.removeEventListener('mousedown', closeHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          initial={{
            transform: 'translateX(-100%)',
          }}
          animate={{
            transform: 'translateX(0%)',
          }}
          exit={{
            transform: 'translateX(-100%)',
          }}
          transition={{
            duration: 0.1,
          }}
          className='fixed bottom-[calc(12px+var(--taskbar-height))] left-3 top-3 z-50 flex w-[760px] select-none items-center justify-center rounded-lg bg-[#eaeaea]'
        >
          <div className='flex max-w-[480px] flex-col items-center text-center'>
            <div className='mb-8'>
              <Image
                src='/static/images/apps/widgets/big-icon.png'
                width={47}
                height={40}
                alt='Widgets Icon'
                className='shadow-[0_5px_17px_0px_rgba(0,0,0,0.3)]'
                draggable={false}
                quality={100}
              />
            </div>
            <h2 className='mb-2 text-[28px] font-medium'>
              Sign in to use your widgets
            </h2>
            <p className='mb-6 text-sm'>
              Get quick access to the latest headlines, weather updates, your To
              Do list, and everything else that's important to you at a glance.
            </p>
            <Button className='h-8 w-[150px] text-center text-sm'>
              Sign in
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Widgets
