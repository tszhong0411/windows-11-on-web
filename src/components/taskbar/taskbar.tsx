'use client'

import type { DraggableSyntheticListeners } from '@dnd-kit/core'
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers'
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { cx } from '@tszhong0411/utils'
import { format } from 'date-fns'
import React from 'react'
import { useLocalStorage } from 'react-use'

import { useCalendar, useQuickSettings, useSettings, useWidgets } from '@/hooks'

import { NonDraggableApps, TaskbarApp, TaskbarApps } from '@/config'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip'
import { getVolumeLevel } from '@/utils'

import App from './app'
import {
  MutedIcon,
  NoWifiIcon,
  Volume0Icon,
  Volume1Icon,
  Volume2Icon,
  Volume3Icon,
  WifiIcon,
} from '../icons'

const Taskbar = () => {
  return (
    <div
      className={cx(
        'absolute bottom-0 left-0 right-0 z-50 flex h-12 min-w-[100vw] items-center justify-between bg-[#eeeeee] pl-[3px]',
        'before:absolute before:left-0 before:right-0 before:top-0 before:h-px before:w-full before:bg-[#bebebe] before:content-[""]'
      )}
    >
      <Widgets />
      <Apps />
      <SystemTray />
    </div>
  )
}

const Widgets = () => {
  const { open, setOpen } = useWidgets()

  return (
    <App
      name='Widgets'
      id='widgets'
      onClick={() => setOpen(!open)}
      data-id='widgets'
    />
  )
}

type Context = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attributes: Record<string, any>
  listeners: DraggableSyntheticListeners
  ref(node: HTMLElement | null): void
}

const SortableItemContext = React.createContext<Context>({
  attributes: {},
  listeners: undefined,
  ref() {},
})

const Apps = () => {
  const [items, setItems] = useLocalStorage('taskbar', TaskbarApps)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  if (!items) return null

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={({ active, over }) => {
        if (over && active.id !== over?.id) {
          const activeIndex = items.findIndex(({ id }) => id === active.id)
          const overIndex = items.findIndex(({ id }) => id === over.id)

          setItems(arrayMove(items, activeIndex, overIndex))
        }
      }}
      modifiers={[restrictToHorizontalAxis]}
    >
      <SortableContext
        items={items.map((item) => ({ id: item.id }))}
        strategy={horizontalListSortingStrategy}
      >
        <div className='absolute left-1/2 -translate-x-1/2'>
          <div
            className='relative flex items-center gap-1'
            style={{
              paddingRight: `calc(40px * ${items.length} + 4px * ${items.length})`,
            }}
          >
            {NonDraggableApps.map((item) => (
              <App key={item.id} name={item.name} id={item.id} />
            ))}
            <div className='absolute bottom-0 right-0 top-0 flex items-center gap-1 overflow-hidden'>
              {items.map((item, index) => (
                <Item key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </SortableContext>
    </DndContext>
  )
}

type ItemProps = {
  item: TaskbarApp
  index: number
}

const Item = (props: ItemProps) => {
  const { item, index } = props
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id })
  const context = React.useMemo(
    () => ({
      attributes,
      listeners,
      ref: setActivatorNodeRef,
    }),
    [attributes, listeners, setActivatorNodeRef]
  )

  const containerWidth = TaskbarApps.length * 40 + (TaskbarApps.length - 1) * 4
  const maximumLimit = containerWidth - ((index + 1) * 40 + index * 4)
  const minimumLimit = index * 40 * -1 + index * 4 * -1

  const style: React.CSSProperties = {
    transform: CSS.Translate.toString({
      x: transform
        ? transform.x > maximumLimit
          ? maximumLimit
          : transform.x < minimumLimit
          ? minimumLimit
          : transform.x
        : 0,
      y: transform ? transform.y : 0,
      scaleX: transform ? transform.scaleX : 1,
      scaleY: transform ? transform.scaleY : 1,
    }),
    transition,
  }

  return (
    <SortableItemContext.Provider value={context} key={item.id}>
      <App
        name={item.name}
        id={item.id}
        ref={setNodeRef}
        style={style}
        isDragging={isDragging}
        {...attributes}
        {...listeners}
      />
    </SortableItemContext.Provider>
  )
}

const SystemTray = () => {
  const [time, setTime] = React.useState(new Date())
  const { volume, setVolume, muted, wifi } = useSettings()
  const { open: quickSettingsOpen, setOpen: setQuickSettingsOpen } =
    useQuickSettings()
  const { open: calendarOpen, setOpen: setCalendarOpen } = useCalendar()

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const adjustVolumeHandler = (e: React.WheelEvent<HTMLDivElement>) => {
    const scrollingUp = e.deltaY < 0
    const scrollingDown = e.deltaY > 0

    if (scrollingUp && volume < 100) {
      setVolume(volume + 2)
    } else if (scrollingDown && volume > 0) {
      setVolume(volume - 2)
    }
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
    <div className='flex select-none items-center gap-[3px]'>
      {/* Quick settings */}
      <button
        className='flex items-center gap-1.5 rounded px-2 text-right text-xs hover:bg-white/90'
        onClick={() => setQuickSettingsOpen(!quickSettingsOpen)}
        data-id='quick-settings'
      >
        {/* Network */}
        <Tooltip delayDuration={1000}>
          <TooltipTrigger asChild>
            <div className='flex h-10 items-center'>
              {wifi ? (
                <WifiIcon width={14} height={14} />
              ) : (
                <NoWifiIcon width={14} height={14} />
              )}
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
            <div
              className='flex h-10 items-center'
              onWheel={adjustVolumeHandler}
            >
              {muted ? (
                <MutedIcon width={14} height={14} />
              ) : (
                <VolumeIcon width={14} height={14} />
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent sideOffset={18}>
            <span>
              Speakers (High Definition Audio Device):{' '}
              {volume === 0 ? 'Muted' : `${volume}%`}
            </span>
          </TooltipContent>
        </Tooltip>
      </button>

      {/* Clock */}
      <Tooltip delayDuration={1000}>
        <TooltipTrigger asChild>
          <button
            onClick={() => setCalendarOpen(!calendarOpen)}
            className='rounded py-1 pl-2 pr-2 text-right text-xs hover:bg-white/90'
            data-id='calendar'
          >
            <div>{format(time, 'h:mm a')}</div>
            <div>{format(time, 'M/d/yyyy')}</div>
          </button>
        </TooltipTrigger>
        <TooltipContent sideOffset={18}>
          <span>{format(time, 'EEEE, MMMM d, yyyy')}</span>
        </TooltipContent>
      </Tooltip>

      {/* Show desktop */}
      <Tooltip delayDuration={1000}>
        <TooltipTrigger asChild>
          <div
            className={cx(
              'relative ml-[3px] h-12 w-[6px]',
              'hover:before:absolute hover:before:left-0 hover:before:top-1/2 hover:before:block hover:before:h-4 hover:before:w-px hover:before:-translate-y-1/2 hover:before:bg-[#7c8389]'
            )}
          ></div>
        </TooltipTrigger>
        <TooltipContent sideOffset={12}>
          <span>Show desktop</span>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export default Taskbar
