'use client'

import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import React from 'react'
import { useKey } from 'react-use'

import { useClickOutside, useQuickSettings } from '@/hooks'

import Footer from './footer'
import Toggles from './toggles'
import Volume from './volume'

const QuickSettings = () => {
  const { open, setOpen } = useQuickSettings()
  const [ref, setRef] = React.useState<HTMLDivElement | null>(null)

  useKey('Escape', () => setOpen(false))
  useClickOutside(
    () => setOpen(false),
    [ref, document.querySelector('[data-id=quick-settings]')]
  )

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
          className='acrylic fixed bottom-[calc(12px+var(--taskbar-height))] right-3 z-[9000] flex h-[332px] w-[360px] select-none flex-col justify-between rounded-lg border border-shell shadow-shell'
          ref={setRef}
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
