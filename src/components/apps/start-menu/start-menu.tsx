'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useKey } from 'react-use'

import { useClickOutside, useStartMenu } from '@/hooks'

import AllApps from './all-apps'
import Footer from './footer'
import Pinned from './pinned'
import Recommended from './recommended'
import Search from './search'

const StartMenu = () => {
  const { open, setOpen, reset } = useStartMenu()
  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const { allApps } = useStartMenu()

  useKey('Escape', () => {
    setOpen(false)
    reset()
  })
  useClickOutside(() => {
    setOpen(false)
    reset()
  }, [ref, document.querySelector('[data-id=start]')])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            transform: 'translate(-50%, calc(100% + 48px))'
          }}
          animate={{
            transform: 'translate(-50%, 0%)'
          }}
          exit={{
            transform: 'translate(-50%, calc(100% + 48px))'
          }}
          transition={{
            duration: 0.15
          }}
          className='acrylic fixed bottom-[calc(12px+var(--taskbar-height))] left-1/2 z-[9000] flex h-[726px] w-[642px] select-none flex-col rounded-lg border border-shell shadow-shell'
          ref={setRef}
        >
          <Search />
          {allApps ? (
            <AllApps />
          ) : (
            <>
              <Pinned />
              <Recommended />
            </>
          )}
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default StartMenu
