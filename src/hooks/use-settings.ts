import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type SettingsStates = {
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
    iconSize: 'small-icons',
    autoArrangeIcons: false,
    alignIconsToGrid: true,
    showDesktopIcons: true,
  },
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
        document.body.setAttribute('data-night-light', String(nightLight))
        set({ nightLight })
      },
      setNearbySharing: (nearbySharing) => set({ nearbySharing }),
      setMuted: (muted) => set({ muted }),
      setCalendarExpanded: (calendarExpanded) => set({ calendarExpanded }),
      setDesktop: (desktop) => set({ desktop }),
    }),
    {
      name: 'settings',
      onRehydrateStorage: () => (state) => {
        if (state?.nightLight) {
          document.body.setAttribute('data-night-light', 'true')
        }
      },
    }
  )
)
