'use client'

import React from 'react'

import { useSettings } from '@/hooks'

import {
  MutedIcon,
  Volume0Icon,
  Volume1Icon,
  Volume2Icon,
  Volume3Icon,
} from '@/components/icons'

import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from '@/ui/slider'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip'
import { getVolumeLevel } from '@/utils'

const Volume = () => {
  const { muted, setMuted, volume, setVolume } = useSettings()
  const [volumeTooltipOpened, setVolumeTooltipOpened] = React.useState(false)
  const openTimerRef = React.useRef(0)

  /*
    I do this manually because I want to show the tooltip
    when the user is dragging the slider.

    So, I need to use a controlled way to open the tooltip.
    And the delay function should be kept.

    Copied from https://github.com/radix-ui/primitives/blob/main/packages/react/tooltip/src/Tooltip.tsx
  */
  const delayedOpenHandler = React.useCallback(() => {
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
    <div className='flex flex-col gap-6 pb-[14.5px] pt-[18px]'>
      {/* Volume */}
      <div className='flex items-center gap-1 px-3'>
        {/* Mute button */}
        <Tooltip delayDuration={1000}>
          <TooltipTrigger asChild>
            <button
              className='flex h-10 w-10 shrink-0 cursor-default items-center justify-center rounded hover:bg-[rgba(0,0,0,0.0373)]'
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
                onMouseEnter={delayedOpenHandler}
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
  )
}

export default Volume
