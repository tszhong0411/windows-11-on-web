import { create } from 'zustand'

type WidgetsStore = {
  setOpen: (open: boolean) => void
  open: boolean
}

export const useWidgets = create<WidgetsStore>()((set) => ({
  open: false,
  setOpen: (open) => set({ open })
}))
