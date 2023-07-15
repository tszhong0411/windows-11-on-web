import { create } from 'zustand'

type WidgetsStates = {
  open: boolean
}

const initialStates: WidgetsStates = {
  open: false,
}

type WidgetsActions = {
  setOpen: (open: boolean) => void
}

export const useWidgets = create<WidgetsStates & WidgetsActions>()((set) => ({
  ...initialStates,
  setOpen: (open) => set({ open }),
}))
