import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { App } from '@/types'

export type SettingsStates = {
  volume: number
  wifi: boolean
  bluetooth: boolean
  airplaneMode: boolean
  nightLight: boolean
  nearbySharing: boolean
  muted: boolean
  calendarExpanded: boolean
  desktop: {
    iconSize: 'large-icons' | 'medium-icons' | 'small-icons'
    autoArrangeIcons: boolean
    alignIconsToGrid: boolean
    showDesktopIcons: boolean
  }
  apps: App[]
}

const initialStates: SettingsStates = {
  volume: 100,
  wifi: true,
  bluetooth: false,
  airplaneMode: false,
  nightLight: false,
  nearbySharing: false,
  muted: false,
  calendarExpanded: true,
  desktop: {
    iconSize: 'medium-icons',
    autoArrangeIcons: false,
    alignIconsToGrid: true,
    showDesktopIcons: true
  },
  apps: [
    {
      name: 'Edge',
      id: 'edge'
    },
    {
      name: 'Mail',
      id: 'mail'
    },
    {
      name: 'Calendar',
      id: 'calendar'
    },
    {
      name: 'Microsoft Store',
      id: 'store'
    },
    {
      name: 'Photos',
      id: 'photos'
    },
    {
      name: 'Settings',
      id: 'settings'
    },
    {
      name: 'Office',
      id: 'office'
    },
    {
      name: 'Solitaire & Casual Games',
      id: 'solitaire'
    },
    {
      name: 'Microsoft Clipchamp',
      id: 'clipchamp'
    },
    {
      name: 'Calculator',
      id: 'calculator'
    },
    {
      name: 'Google Chrome',
      id: 'chrome'
    },
    {
      name: 'File Explorer',
      id: 'explorer'
    },
    {
      name: 'Get Started',
      id: 'get-started'
    },
    {
      name: 'Terminal',
      id: 'windows-terminal'
    }
  ]
}

type SettingsActions = {
  setVolume: (volume: number) => void
  setWifi: (wifi: boolean) => void
  setBluetooth: (bluetooth: boolean) => void
  setAirplaneMode: (airplaneMode: boolean) => void
  setNightLight: (nightLight: boolean) => void
  setNearbySharing: (nearbySharing: boolean) => void
  setMuted: (muted: boolean) => void
  setCalendarExpanded: (calendarExpanded: boolean) => void
  setDesktop: (desktop: SettingsStates['desktop']) => void
  setApps: (apps: SettingsStates['apps']) => void
}

export const useSettings = create<SettingsStates & SettingsActions>()(
  persist(
    (set) => ({
      ...initialStates,
      setVolume: (volume) => set({ volume }),
      setWifi: (wifi) => set({ wifi }),
      setBluetooth: (bluetooth) => set({ bluetooth }),
      setAirplaneMode: (airplaneMode) => set({ airplaneMode }),
      setNightLight: (nightLight) => {
        document.body.dataset.nightLight = String(nightLight)
        set({ nightLight })
      },
      setNearbySharing: (nearbySharing) => set({ nearbySharing }),
      setMuted: (muted) => set({ muted }),
      setCalendarExpanded: (calendarExpanded) => set({ calendarExpanded }),
      setDesktop: (desktop) => set({ desktop }),
      setApps: (apps) => set({ apps })
    }),
    {
      name: 'settings',
      // eslint-disable-next-line unicorn/consistent-function-scoping
      onRehydrateStorage: () => (state) => {
        if (state?.nightLight) {
          document.body.dataset.nightLight = 'true'
        }
      }
    }
  )
)
