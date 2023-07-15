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

import { NonDraggableApps, TaskbarApp, TaskbarApps } from '@/config'

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

const Apps = () => {
  const [apps, setApps] = useLocalStorage('taskbar', TaskbarApps)
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
            {NonDraggableApps.map((app) => (
              <App key={app.id} name={app.name} id={app.id} />
            ))}
            <div className='absolute bottom-0 right-0 top-0 flex items-center gap-1 overflow-hidden'>
              {apps.map((app, index) => (
                <DraggableApp key={app.id} app={app} index={index} />
              ))}
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
}

const DraggableApp = (props: DraggableAppProps) => {
  const { app, index } = props
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: app.id })
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
    <SortableItemContext.Provider value={context} key={app.id}>
      <App
        name={app.name}
        id={app.id}
        ref={setNodeRef}
        style={style}
        isDragging={isDragging}
        {...attributes}
        {...listeners}
      />
    </SortableItemContext.Provider>
  )
}

export default Apps
