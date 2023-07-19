import React from 'react'

import { useSettings, useStartMenu } from '@/hooks'

import { ChevronLeftIcon } from '@/components/icons'

import Button from '@/ui/button'
import { ScrollArea } from '@/ui/scroll-area'

import App from './app'

const AllApps = () => {
  const { setAllApps } = useStartMenu()
  const { apps } = useSettings()

  const sortedApps = apps
    .sort((a, b) => a.name.localeCompare(b.name))
    .reduce((acc, app) => {
      const firstLetter = app.name[0].toUpperCase()

      if (!acc[firstLetter]) {
        acc[firstLetter] = []
      }

      acc[firstLetter].push(app)

      return acc
    }, {} as Record<string, typeof apps>)

  return (
    <div className='mt-10 flex flex-col gap-3'>
      <div className='flex items-center justify-between px-16'>
        <div className='text-sm font-semibold'>All apps</div>
        <div>
          <Button
            className='flex items-center justify-center gap-3 px-2 text-xs leading-[22px]'
            onClick={() => setAllApps(false)}
          >
            <ChevronLeftIcon width={8} height={8} />
            Back
          </Button>
        </div>
      </div>
      <ScrollArea className='h-[520px] px-[52px] pb-8'>
        {Object.keys(sortedApps).map((letter) => (
          <React.Fragment key={letter}>
            <div
              key={letter}
              className='flex h-10 items-center rounded px-[19px] transition-colors duration-150 hover:bg-white/70'
            >
              <div className='mr-auto flex w-2.5 items-center justify-center text-sm'>
                {letter}
              </div>
            </div>
            {sortedApps[letter].map((app) => (
              <App key={app.id} {...app} />
            ))}
          </React.Fragment>
        ))}
      </ScrollArea>
    </div>
  )
}

export default AllApps
