import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import React from 'react'

import { useQuickSettings, useSettings } from '@/hooks'

import {
  AirplaneIcon,
  BluetoothIcon,
  EditIcon,
  MutedIcon,
  NightLightActiveIcon,
  NightLightIcon,
  SettingsIcon,
  ShareIcon,
  Volume0Icon,
  Volume1Icon,
  Volume2Icon,
  Volume3Icon,
  WifiIcon,
} from '@/components/icons'

import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from '@/ui/slider'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip'
import { getVolumeLevel } from '@/utils'

import Toggle from './toggle'

const QuickSettings = () => {
  const { open, setOpen } = useQuickSettings()
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
    setNearbySharing,
    volume,
    setVolume,
    muted,
    setMuted,
  } = useSettings()
  const ref = React.useRef<HTMLDivElement>(null)
  const [volumeTooltipOpened, setVolumeTooltipOpened] = React.useState(false)
  const openTimerRef = React.useRef(0)

  React.useEffect(() => {
    const closeHandler = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node) &&
        !(
          document.querySelector(
            '[data-id=quick-settings]'
          ) as HTMLButtonElement
        ).contains(e.target as Node) &&
        open
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', closeHandler)

    return () => {
      document.removeEventListener('mousedown', closeHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  /*
    I do this manually because I want to show the tooltip
    when the user is dragging the slider.

    So, I need to use a controlled way to open the tooltip.
    And the delay function should be kept.

    Copied from https://github.com/radix-ui/primitives/blob/main/packages/react/tooltip/src/Tooltip.tsx
  */
  const handleDelayedOpen = React.useCallback(() => {
    window.clearTimeout(openTimerRef.current)
    openTimerRef.current = window.setTimeout(() => {
      setVolumeTooltipOpened(true)
    }, 1000)
  }, [setVolumeTooltipOpened])

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => window.clearTimeout(openTimerRef.current)
  }, [])

  const playSound = () => {
    const sound = new Audio('/static/sounds/volume_adjust.mp3')
    sound.volume = volume / 100
    sound.play()
  }

  const VolumeIcon = (props: React.SVGAttributes<SVGElement>) => {
    switch (getVolumeLevel(volume)) {
      case 0:
        return <Volume0Icon {...props} />
      case 1:
        return <Volume1Icon {...props} />
      case 2:
        return <Volume2Icon {...props} />
      case 3:
        return <Volume3Icon {...props} />
      default:
        return null
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          initial={{
            transform: 'translateY(100%)',
          }}
          animate={{
            transform: 'translateY(0%)',
          }}
          exit={{
            transform: 'translateY(100%)',
          }}
          transition={{
            duration: 0.1,
          }}
          className='fixed bottom-[calc(12px+var(--taskbar-height))] right-3 z-40 h-[338px] w-[360px] select-none rounded-lg border border-[rgba(117,117,117,0.4)] bg-[#eaeaea]'
        >
          {/* Toggles */}
          <div className='flex flex-wrap gap-x-4 gap-y-6 px-4 py-6'>
            <Toggle
              label={wifi ? 'Hong' : 'Wi-FI'}
              icon={<WifiIcon width={16} height={16} />}
              active={wifi}
              onClick={() => setWifi(!wifi)}
            />
            <Toggle
              label={bluetooth ? 'Not connected' : 'Bluetooth'}
              icon={<BluetoothIcon width={16} height={16} />}
              active={bluetooth}
              onClick={() => setBluetooth(!bluetooth)}
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
              onClick={() => setNightLight(!nightLight)}
            />
            <Toggle
              label='Nearby sharing'
              icon={<ShareIcon width={16} height={16} />}
              active={nearbySharing}
              onClick={() => setNearbySharing(!nearbySharing)}
            />
          </div>

          {/* Sliders */}
          <div className='flex flex-col gap-6 pb-[14.5px] pt-[18px]'>
            {/* Volume */}
            <div className='flex items-center gap-1 px-3'>
              {/* Mute button */}
              <Tooltip delayDuration={1000}>
                <TooltipTrigger asChild>
                  <button
                    className='flex h-10 w-10 shrink-0 items-center justify-center rounded hover:bg-[rgba(0,0,0,0.0373)]'
                    onClick={() => setMuted(!muted)}
                  >
                    {muted ? (
                      <MutedIcon width={14} height={14} />
                    ) : (
                      <VolumeIcon width={14} height={14} />
                    )}
                  </button>
                </TooltipTrigger>
                <TooltipContent>{muted ? 'Unmute' : 'Mute'}</TooltipContent>
              </Tooltip>
              {/* Slider */}
              <SliderRoot
                value={[volume]}
                max={100}
                step={1}
                className='w-full'
                onValueChange={(value) => {
                  setVolumeTooltipOpened(true)
                  if (muted) setMuted(false)
                  setVolume(value[0])
                  if (value[0] === 0) setMuted(true)
                }}
                onValueCommit={() => {
                  setVolumeTooltipOpened(false)
                  playSound()
                }}
              >
                <SliderTrack>
                  <SliderRange />
                </SliderTrack>
                <Tooltip open={volumeTooltipOpened}>
                  <TooltipTrigger asChild>
                    <SliderThumb
                      onMouseEnter={handleDelayedOpen}
                      onMouseLeave={() => {
                        window.clearTimeout(openTimerRef.current)
                        setVolumeTooltipOpened(false)
                      }}
                    />
                  </TooltipTrigger>
                  <TooltipContent
                    updatePositionStrategy='always'
                    onPointerDownOutside={(e) => e.preventDefault()}
                    sideOffset={20}
                  >
                    {volume}
                  </TooltipContent>
                </Tooltip>
              </SliderRoot>
            </div>
          </div>

          {/* Footer */}
          <div className='flex h-12 w-full items-center justify-end border-t border-[rgba(0,0,0,0.0803)] px-2'>
            <div className='flex items-center gap-1'>
              {/* Edit quick settings */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className='flex h-10 w-9 items-center justify-center rounded hover:bg-[rgba(0,0,0,0.0373)]'>
                    <EditIcon width={16} height={16} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>Edit quick settings</TooltipContent>
              </Tooltip>
              {/* All settings */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className='flex h-10 w-9 items-center justify-center rounded hover:bg-[rgba(0,0,0,0.0373)]'>
                    <SettingsIcon width={16} height={16} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>All settings</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default QuickSettings
