import dayjs, { Dayjs } from 'dayjs'
import { create } from 'zustand'

type CalendarStates = {
  open: boolean
  view: 'month' | 'year' | 'decade'
  date: Dayjs
  drill: 'up' | 'down'
}

const initialStates: CalendarStates = {
  open: false,
  view: 'month',
  date: dayjs(),
  drill: 'down'
}

type CalendarActions = {
  setOpen: (open: boolean) => void
  setView: (view: 'month' | 'year' | 'decade') => void
  setDate: (date: Dayjs) => void
  setDrill: (drill: 'up' | 'down') => void
}

export const useCalendar = create<CalendarStates & CalendarActions>()(
  (set) => ({
    ...initialStates,
    setOpen: (open) => {
      if (open) {
        set({ view: 'month' })
        set({ date: dayjs() })
        set({ open })
        return
      }

      set({ open })
    },
    setView: (view) => set({ view }),
    setDate: (date) => set({ date }),
    setDrill: (drill) => set({ drill })
  })
)
