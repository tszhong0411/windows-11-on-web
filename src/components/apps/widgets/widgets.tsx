'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import { useClickOutside, useWidgets } from '@/hooks'
import Button from '@/ui/button'

const Widgets = () => {
  const { open, setOpen } = useWidgets()
  const [ref, setRef] = React.useState<HTMLDivElement | null>(null)

  useClickOutside(
    () => setOpen(false),
    [ref, document.querySelector('[data-id=widgets]')]
  )

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            transform: 'translateX(-100%)'
          }}
          animate={{
            transform: 'translateX(0%)'
          }}
          exit={{
            transform: 'translateX(-100%)'
          }}
          transition={{
            duration: 0.1
          }}
          className='fixed bottom-[calc(12px+var(--taskbar-height))] left-3 top-3 z-[9000] flex w-[760px] select-none items-center justify-center rounded-lg bg-[#eaeaea]'
          ref={setRef}
        >
          <div className='flex max-w-[480px] flex-col items-center text-center'>
            <div className='mb-8'>
              <Image
                src='/images/apps/widgets/big-icon.png'
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
              Do list, and everything else that&apos;s important to you at a
              glance.
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
