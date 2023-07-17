'use client'

import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import React from 'react'
import { useKey } from 'react-use'

import { useQuickSettings } from '@/hooks'

import Footer from './footer'
import Toggles from './toggles'
import Volume from './volume'

const QuickSettings = () => {
  const { open, setOpen } = useQuickSettings()

  useKey('Escape', () => setOpen(false))

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            transform: 'translateY(calc(100% + 48px))',
          }}
          animate={{
            transform: 'translateY(0%)',
          }}
          exit={{
            transform: 'translateY(calc(100% + 48px))',
          }}
          transition={{
            duration: 0.1,
          }}
          className='acrylic fixed bottom-[calc(12px+var(--taskbar-height))] right-3 z-40 flex h-[332px] w-[360px] select-none flex-col justify-between rounded-lg border border-shell shadow-shell'
        >
          <Toggles />
          <Volume />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default QuickSettings
