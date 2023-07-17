'use client'

import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import React from 'react'
import { useKey } from 'react-use'

import { useClickOutside, useStartMenu } from '@/hooks'

import Footer from './footer'
import Search from './search'

const StartMenu = () => {
  const { open, setOpen } = useStartMenu()

  const ref = useClickOutside<HTMLDivElement>(() => setOpen(false))

  useKey('Escape', () => setOpen(false))

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          initial={{
            transform: 'translate(-50%, calc(100% + 48px))',
          }}
          animate={{
            transform: 'translate(-50%, 0%)',
          }}
          exit={{
            transform: 'translate(-50%, calc(100% + 48px))',
          }}
          transition={{
            duration: 0.15,
          }}
          className='acrylic fixed bottom-[calc(12px+var(--taskbar-height))] left-1/2 z-40 flex h-[726px] w-[642px] select-none flex-col rounded-lg border border-shell shadow-shell'
        >
          <Search />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default StartMenu
