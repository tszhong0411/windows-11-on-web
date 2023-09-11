import { create } from 'zustand'

type StartMenuStates = {
  open: boolean
  allApps: boolean
}

const initialStates: StartMenuStates = {
  open: false,
  allApps: false
}

type StartMenuActions = {
  setOpen: (open: boolean) => void
  setAllApps: (allApps: boolean) => void
  reset: () => void
}

export const useStartMenu = create<StartMenuStates & StartMenuActions>()(
  (set) => ({
    ...initialStates,
    setOpen: (open) => set({ open }),
    setAllApps: (allApps) => set({ allApps }),
    reset: () => set(initialStates)
  })
)
