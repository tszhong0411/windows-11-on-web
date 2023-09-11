'use client'

import { cx } from '@tszhong0411/utils'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import React from 'react'
import { useKey } from 'react-use'

import { useCalendar, useClickOutside, useSettings } from '@/hooks'

import DecadeView from './decade-view'
import Footer from './footer'
import Header from './header'
import MonthView from './month-view'
import Navigation from './navigation'
import YearView from './year-view'

export const variants: Variants = {
  upInitial: {
    scale: 0.9,
    opacity: 0
  },
  downInitial: {
    scale: 1.2,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1
  },
  upExit: {
    scale: 1.2,
    opacity: 0
  },
  downExit: {
    scale: 0.9,
    opacity: 0
  }
}

const Calendar = () => {
  const { open, setOpen, view } = useCalendar()
  const { calendarExpanded } = useSettings()
  const [ref, setRef] = React.useState<HTMLDivElement | null>(null)

  useKey('Escape', () => setOpen(false))
  useClickOutside(
    () => setOpen(false),
    [ref, document.querySelector('[data-id=calendar]')]
  )

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            transform: 'translateX(calc(100% + 48px))'
          }}
          animate={{
            transform: 'translateX(0%)'
          }}
          exit={{
            transform: 'translateX(calc(100% + 48px))'
          }}
          transition={{
            duration: 0.1
          }}
          className={cx(
            'acrylic fixed bottom-[calc(12px+var(--taskbar-height))] right-3 z-[9000] w-[334px] select-none rounded-lg border border-shell shadow-flyout'
          )}
          ref={setRef}
        >
          <Header />
          <div
            className={cx(
              'h-[353px] overflow-hidden transition-[max-height,margin-bottom] duration-[250ms] ease-[cubic-bezier(0.62,0,0.32,1)]',
              calendarExpanded ? 'mb-[50px] max-h-[353px]' : 'mb-12 max-h-0'
            )}
          >
            <Navigation />
            {view === 'month' && <MonthView />}
            {view === 'year' && <YearView />}
            {view === 'decade' && <DecadeView />}
          </div>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Calendar
