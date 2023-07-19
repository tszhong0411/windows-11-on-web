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
import React from 'react'
import { useLocalStorage } from 'react-use'

import { useStartMenu } from '@/hooks'

import App from './app'

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

export type TaskbarApp = {
  name: string
  id: string
  active?: boolean
  tooltip?: string
  'data-id'?: string
} & React.ComponentPropsWithoutRef<'button'>

const Apps = () => {
  const { open, setOpen } = useStartMenu()
  const nonDraggableApps: TaskbarApp[] = [
    {
      name: 'Start',
      tooltip: 'Start',
      id: 'start',
      onClick: () => setOpen(!open),
      active: open,
      'data-id': 'start',
    },
    { name: 'Search', tooltip: 'Search', id: 'search' },
    { name: 'Task View', id: 'task-view' },
    { name: 'Chat', tooltip: 'Chat', id: 'chat' },
  ]

  const taskbarApps: TaskbarApp[] = [
    { name: 'File Explorer', tooltip: 'File Explorer', id: 'explorer' },
    { name: 'Google Chrome', tooltip: 'Google Chrome', id: 'chrome' },
    { name: 'Microsoft Store', tooltip: 'Microsoft Store', id: 'store' },
  ]

  const [apps, setApps] = useLocalStorage('taskbar', taskbarApps)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  if (!apps) return null

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={({ active, over }) => {
        if (over && active.id !== over?.id) {
          const activeIndex = apps.findIndex(({ id }) => id === active.id)
          const overIndex = apps.findIndex(({ id }) => id === over.id)

          setApps(arrayMove(apps, activeIndex, overIndex))
        }
      }}
      modifiers={[restrictToHorizontalAxis]}
    >
      <SortableContext
        items={apps.map((app) => ({ id: app.id }))}
        strategy={horizontalListSortingStrategy}
      >
        <div className='absolute left-1/2 -translate-x-1/2'>
          <div
            className='relative flex items-center gap-1'
            style={{
              paddingRight: `calc(40px * ${apps.length} + 4px * ${apps.length})`,
            }}
          >
            {nonDraggableApps.map((app) => {
              const { id, ...rest } = app

              return <App key={id} id={id} {...rest} />
            })}
            <div className='absolute bottom-0 right-0 top-0 flex items-center gap-1 overflow-hidden'>
              {apps.map((app, index) => {
                const { id, ...rest } = app

                return (
                  <DraggableApp
                    key={id}
                    app={app}
                    index={index}
                    taskbarApps={taskbarApps}
                    {...rest}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </SortableContext>
    </DndContext>
  )
}

type DraggableAppProps = {
  app: TaskbarApp
  index: number
  taskbarApps: TaskbarApp[]
}

const DraggableApp = (props: DraggableAppProps) => {
  const { app, index, taskbarApps } = props
  const { name, id, ...rest } = app
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id })
  const context = React.useMemo(
    () => ({
      attributes,
      listeners,
      ref: setActivatorNodeRef,
    }),
    [attributes, listeners, setActivatorNodeRef]
  )

  const containerWidth = taskbarApps.length * 40 + (taskbarApps.length - 1) * 4
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
    <SortableItemContext.Provider value={context} key={id}>
      <App
        name={name}
        id={id}
        ref={setNodeRef}
        style={style}
        isDragging={isDragging}
        {...attributes}
        {...listeners}
        {...rest}
      />
    </SortableItemContext.Provider>
  )
}

export default Apps
