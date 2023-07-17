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
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const closeHandler = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node) &&
        !(
          document.querySelector(
            '[data-id=quick-settings]'
          ) as HTMLButtonElement
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

  useKey('Escape', () => setOpen(false))

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
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
          className='acrylic fixed bottom-[calc(12px+var(--taskbar-height))] right-3 z-40 flex h-[332px] w-[360px] select-none flex-col justify-between rounded-lg border border-[rgba(117,117,117,0.4)] shadow-shell'
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
