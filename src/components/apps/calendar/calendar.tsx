'use client'

import { format } from 'date-fns'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import React from 'react'
import { DayPicker } from 'react-day-picker'

import { useCalendar } from '@/hooks'

import { AddIcon, PlayFilledIcon, SubtractIcon } from '@/components/icons'

import Button from '@/ui/button'

const Calendar = () => {
  const { open, setOpen } = useCalendar()
  const ref = React.useRef<HTMLDivElement>(null)
  const [timer, setTimer] = React.useState(30)
  const [selected, setSelected] = React.useState<Date>()

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

  const addTimeHandler = () => {
    setTimer((prev) => prev + 5)
  }

  const subtractTimeHandler = () => {
    setTimer((prev) => prev - 5)
  }

  let footer = <p>Please pick a day.</p>
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          initial={{
            transform: 'translateX(100%)',
          }}
          animate={{
            transform: 'translateX(0%)',
          }}
          exit={{
            transform: 'translateX(100%)',
          }}
          transition={{
            duration: 0.1,
          }}
          className='fixed bottom-[calc(12px+var(--taskbar-height))] right-3 z-40 h-[338px] w-[360px] select-none rounded-lg border border-[rgba(117,117,117,0.4)] bg-[#f2f2f2]'
        >
          <DayPicker
            mode='single'
            selected={selected}
            onSelect={setSelected}
            footer={footer}
            modifiersClassNames={{
              today:
                'bg-[#005fb8] text-white hover:bg-[rgba(0,95,184,0.9)] hover:text-black/70 active:bg-[rgba(0,95,184,0.8)] active:text-white/70',
            }}
          />
          {/* Footer */}
          <div className='flex h-12 w-full items-center justify-between border-t border-[rgba(0,0,0,0.0803)] px-2'>
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Calendar
