import { create } from 'zustand'

type StartMenuStates = {
  open: boolean
}

const initialStates: StartMenuStates = {
  open: false,
}

type StartMenuActions = {
  setOpen: (open: boolean) => void
}

export const useStartMenu = create<StartMenuStates & StartMenuActions>()(
  (set) => ({
    ...initialStates,
    setOpen: (open) => set({ open }),
  })
)
