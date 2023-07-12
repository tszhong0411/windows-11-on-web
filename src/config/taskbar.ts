export type TaskbarApp = {
  name: string
  id: string
}

export const NonDraggableApps: TaskbarApp[] = [
  { name: 'Start Menu', id: 'start' },
  { name: 'Search', id: 'search' },
  { name: 'Task View', id: 'task-view' },
  { name: 'Chat', id: 'chat' },
]

export const TaskbarApps: TaskbarApp[] = [
  { name: 'Explorer', id: 'explorer' },
  { name: 'Google Chrome', id: 'chrome' },
  { name: 'Microsoft Store', id: 'store' },
]
