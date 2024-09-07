import { Fragment } from 'react'

import { ChevronLeftIcon } from '@/components/icons'
import { useSettings, useStartMenu } from '@/hooks'
import { Button } from '@/ui/button'
import { ScrollArea } from '@/ui/scroll-area'

import App from './app'

const AllApps = () => {
  const { setAllApps } = useStartMenu()
  const { apps } = useSettings()

  const sortedApps = new Map<string, typeof apps>()

  for (const app of apps) {
    const firstLetter = app.name[0]!.toUpperCase()

    if (!sortedApps.get(firstLetter)) {
      sortedApps.set(firstLetter, [])
    }

    sortedApps.get(firstLetter)?.push(app)
  }

  return (
    <div className='mt-10 flex flex-col gap-3'>
      <div className='flex items-center justify-between px-16'>
        <div className='text-sm font-semibold'>All apps</div>
        <div>
          <Button
            className='flex items-center justify-center gap-3 px-2 text-xs leading-[22px]'
            onClick={() => {
              setAllApps(false)
            }}
          >
            <ChevronLeftIcon width={8} height={8} />
            Back
          </Button>
        </div>
      </div>
      <ScrollArea className='h-[520px] px-[52px] pb-8'>
        {[...sortedApps.keys()].map((letter) => (
          <Fragment key={letter}>
            <div
              key={letter}
              className='flex h-10 items-center rounded px-[19px] transition-colors duration-150 hover:bg-white/70'
            >
              <div className='mr-auto flex w-2.5 items-center justify-center text-sm'>{letter}</div>
            </div>
            {sortedApps.get(letter)?.map((app) => <App key={app.id} {...app} />)}
          </Fragment>
        ))}
      </ScrollArea>
    </div>
  )
}

export default AllApps
