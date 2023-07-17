'use client'

import { cx } from '@tszhong0411/utils'
import { AnimatePresence, Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import React from 'react'
import { useKey } from 'react-use'

import { useCalendar, useSettings } from '@/hooks'

import DecadeView from './decade-view'
import Footer from './footer'
import Header from './header'
import MonthView from './month-view'
import Navigation from './navigation'
import YearView from './year-view'

export const variants: Variants = {
  upInitial: {
    scale: 0.9,
    opacity: 0,
  },
  downInitial: {
    scale: 1.2,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  upExit: {
    scale: 1.2,
    opacity: 0,
  },
  downExit: {
    scale: 0.9,
    opacity: 0,
  },
}

const Calendar = () => {
  const { open, setOpen, view } = useCalendar()
  const { calendarExpanded } = useSettings()
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const closeHandler = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node) &&
        !(
          document.querySelector('[data-id=calendar]') as HTMLButtonElement
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
            transform: 'translateX(calc(100% + 48px))',
          }}
          animate={{
            transform: 'translateX(0%)',
          }}
          exit={{
            transform: 'translateX(calc(100% + 48px))',
          }}
          transition={{
            duration: 0.1,
          }}
          className={cx(
            'acrylic fixed bottom-[calc(12px+var(--taskbar-height))] right-3 z-40 w-[334px] select-none rounded-lg border border-[rgba(117,117,117,0.4)] shadow-flyout'
          )}
        >
          <Header />
          <div
            className={cx(
              'h-[343px] overflow-hidden transition-[max-height,margin-bottom] duration-[250ms] ease-[cubic-bezier(0.62,0,0.32,1)]',
              calendarExpanded ? 'mb-[50px] max-h-[343px]' : 'mb-[48px] max-h-0'
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
