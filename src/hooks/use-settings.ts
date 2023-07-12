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
}

const initialStates: SettingsStates = {
  volume: 100,
  wifi: true,
  bluetooth: false,
  airplaneMode: false,
  nightLight: false,
  nearbySharing: false,
  muted: false,
}

type SettingsActions = {
  setVolume: (volume: number) => void
  setWifi: (wifi: boolean) => void
  setBluetooth: (bluetooth: boolean) => void
  setAirplaneMode: (airplaneMode: boolean) => void
  setNightLight: (nightLight: boolean) => void
  setNearbySharing: (nearbySharing: boolean) => void
  setMuted: (muted: boolean) => void
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
