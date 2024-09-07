'use client'

import { cn } from '@tszhong0411/utils'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

import { useCalendar, useQuickSettings, useSettings } from '@/hooks'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip'

import { MutedIcon, NoWifiIcon, WifiIcon } from '../icons'
import VolumeIcon from '../volume-icon'

const SystemTray = () => {
  return (
    <div className='flex select-none items-center gap-[3px]'>
      <QuickSettings />
      <Clock />
      <ShowDesktop />
    </div>
  )
}

const QuickSettings = () => {
  const { volume, setVolume, wifi, muted } = useSettings()
  const { open, setOpen } = useQuickSettings()

  const adjustVolumeHandler = (e: React.WheelEvent<HTMLDivElement>) => {
    const scrollingUp = e.deltaY < 0
    const scrollingDown = e.deltaY > 0

    if (scrollingUp && volume < 100) {
      setVolume(volume + 2)
    } else if (scrollingDown && volume > 0) {
      setVolume(volume - 2)
    }
  }

  return (
    <button
      className={cn(
        'flex cursor-default items-center gap-1.5 rounded px-2 text-right text-xs hover:bg-white/70',
        open && 'bg-white/70'
      )}
      onClick={() => {
        setOpen(!open)
      }}
      data-id='quick-settings'
      type='button'
    >
      {/* Network */}
      <Tooltip delayDuration={1000}>
        <TooltipTrigger asChild>
          <div className='flex h-10 items-center'>
            {wifi ? <WifiIcon width={14} height={14} /> : <NoWifiIcon width={14} height={14} />}
          </div>
        </TooltipTrigger>
        <TooltipContent sideOffset={18}>
          <span>
            {wifi ? (
              <div className='text-left'>
                <div>Network</div>
                <div>Internet access</div>
              </div>
            ) : (
              <div className='text-left'>
                <div>No internet access</div>
                <div>No connection available</div>
              </div>
            )}
          </span>
        </TooltipContent>
      </Tooltip>

      {/* Volume */}
      <Tooltip delayDuration={1000}>
        <TooltipTrigger asChild>
          <div className='flex h-10 items-center' onWheel={adjustVolumeHandler}>
            {muted ? <MutedIcon width={14} height={14} /> : <VolumeIcon width={14} height={14} />}
          </div>
        </TooltipTrigger>
        <TooltipContent sideOffset={18}>
          <span>
            Speakers (High Definition Audio Device): {volume === 0 ? 'Muted' : `${volume}%`}
          </span>
        </TooltipContent>
      </Tooltip>
    </button>
  )
}

const Clock = () => {
  const { open, setOpen } = useCalendar()
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Tooltip delayDuration={1000}>
      <TooltipTrigger asChild>
        <button
          onClick={() => {
            setOpen(!open)
          }}
          className={cn(
            'cursor-default rounded px-2 py-1 text-right text-xs hover:bg-white/70',
            open && 'bg-white/70'
          )}
          data-id='calendar'
          type='button'
        >
          <div>{dayjs(time).format('h:mm A')}</div>
          <div>{dayjs(time).format('M/D/YYYY')}</div>
        </button>
      </TooltipTrigger>
      <TooltipContent sideOffset={18}>
        <span>{dayjs(time).format('dddd, MMMM D, YYYY')}</span>
      </TooltipContent>
    </Tooltip>
  )
}

const ShowDesktop = () => {
  return (
    <Tooltip delayDuration={1000}>
      <TooltipTrigger asChild>
        <div
          className={cn(
            'relative ml-[3px] h-12 w-1.5',
            'hover:before:absolute hover:before:left-0 hover:before:top-1/2 hover:before:block hover:before:h-4 hover:before:w-px hover:before:-translate-y-1/2 hover:before:bg-[#7c8389]'
          )}
        />
      </TooltipTrigger>
      <TooltipContent sideOffset={12}>
        <span>Show desktop</span>
      </TooltipContent>
    </Tooltip>
  )
}

export default SystemTray
