import { create } from 'zustand'

type CalendarStates = {
  open: boolean
}

const initialStates: CalendarStates = {
  open: false,
}

type CalendarActions = {
  setOpen: (open: boolean) => void
}

export const useCalendar = create<CalendarStates & CalendarActions>()(
  (set) => ({
    ...initialStates,
    setOpen: (open) => set({ open }),
  })
)
