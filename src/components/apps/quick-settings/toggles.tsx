'use client'

import {
  AirplaneIcon,
  BluetoothIcon,
  NightLightActiveIcon,
  NightLightIcon,
  ShareIcon,
  WifiIcon
} from '@/components/icons'
import { useSettings } from '@/hooks'

import Toggle from './toggle'

const Toggles = () => {
  const {
    wifi,
    setWifi,
    bluetooth,
    setBluetooth,
    airplaneMode,
    setAirplaneMode,
    nightLight,
    setNightLight,
    nearbySharing,
    setNearbySharing
  } = useSettings()

  return (
    <div className='flex flex-wrap gap-x-3.5 gap-y-6 px-6 pt-6'>
      <Toggle
        label={wifi ? 'Hong' : 'Wi-FI'}
        icon={<WifiIcon width={16} height={16} />}
        active={wifi}
        onClick={() => {
          setWifi(!wifi)
        }}
      />
      <Toggle
        label={bluetooth ? 'Not connected' : 'Bluetooth'}
        icon={<BluetoothIcon width={16} height={16} />}
        active={bluetooth}
        onClick={() => {
          setBluetooth(!bluetooth)
        }}
      />
      <Toggle
        label='Airplane mode'
        icon={<AirplaneIcon width={16} height={16} />}
        active={airplaneMode}
        onClick={() => {
          if (!airplaneMode) {
            setWifi(false)
            setBluetooth(false)
          }
          setAirplaneMode(!airplaneMode)
        }}
      />
      <Toggle
        label='Night light'
        icon={
          nightLight ? (
            <NightLightActiveIcon width={16} height={16} />
          ) : (
            <NightLightIcon width={16} height={16} />
          )
        }
        active={nightLight}
        onClick={() => {
          setNightLight(!nightLight)
        }}
      />
      <Toggle
        label='Nearby sharing'
        icon={<ShareIcon width={16} height={16} />}
        active={nearbySharing}
        onClick={() => {
          setNearbySharing(!nearbySharing)
        }}
      />
    </div>
  )
}

export default Toggles
