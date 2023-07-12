import { create } from 'zustand'

type QuickSettingsStates = {
  open: boolean
}

const initialStates: QuickSettingsStates = {
  open: false,
}

type QuickSettingsActions = {
  setOpen: (open: boolean) => void
}

export const useQuickSettings = create<
  QuickSettingsStates & QuickSettingsActions
>()((set) => ({
  ...initialStates,
  setOpen: (open) => set({ open }),
}))
