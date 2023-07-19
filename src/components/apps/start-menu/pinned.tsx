import { useStartMenu } from '@/hooks'

import { ChevronRightIcon } from '@/components/icons'

import Button from '@/ui/button'

import PinnedApp, { AppProps } from './pinned-app'

const Pinned = () => {
  const { setAllApps } = useStartMenu()
  const apps: AppProps[] = [
    {
      name: 'Edge',
      id: 'edge',
      tooltip: 'Microsoft Edge',
    },
    {
      name: 'Mail',
      id: 'mail',
    },
    {
      name: 'Calendar',
      id: 'calendar',
    },
    {
      name: 'Microsoft Store',
      id: 'store',
    },
    {
      name: 'Photos',
      id: 'photos',
    },
    {
      name: 'Settings',
      id: 'settings',
    },
    {
      name: 'Office',
      id: 'office',
    },
    {
      name: 'Solitaire & Casual Games',
      id: 'solitaire',
    },
    {
      name: 'Microsoft Clipchamp',
      id: 'clipchamp',
    },
    {
      name: 'Calculator',
      id: 'calculator',
    },
  ]

  return (
    <div className='mt-10 flex flex-col gap-3 px-8'>
      <div className='flex items-center justify-between px-8'>
        <div className='text-sm font-semibold'>Pinned</div>
        <div>
          <Button
            className='flex items-center justify-center gap-3 px-2 text-xs leading-[22px]'
            onClick={() => setAllApps(true)}
          >
            All apps <ChevronRightIcon width={8} height={8} />
          </Button>
        </div>
      </div>

      {/* The height of 3 rows of apps */}
      <div className='h-[252px]'>
        <div className='flex flex-wrap'>
          {apps.map((app) => (
            <PinnedApp key={app.id} {...app} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pinned
