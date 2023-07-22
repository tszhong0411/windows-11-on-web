import { cx } from '@tszhong0411/utils'
import Image from 'next/image'
import React from 'react'

import { useSettings } from '@/hooks'
import { SettingsStates } from '@/hooks/use-settings'

const App = () => {
  const { desktop } = useSettings()

  const getIconSize = (size: SettingsStates['desktop']['iconSize']) => {
    switch (size) {
      case 'large-icons':
        return 96
      case 'medium-icons':
        return 48
      case 'small-icons':
        return 32
      default:
        throw new Error('Invalid icon size')
    }
  }

  return (
    <div
      className={cx(
        'flex select-none flex-col items-center justify-center gap-0.5 border border-black',
        desktop.iconSize === 'large-icons' && 'h-[118px] w-28',
        desktop.iconSize === 'medium-icons' && 'h-[70px] w-[78px]',
        desktop.iconSize === 'small-icons' && 'h-[54px] w-[78px]'
      )}
    >
      <Image
        src='/static/images/apps/recycle-bin/icon.png'
        width={getIconSize(desktop.iconSize)}
        height={getIconSize(desktop.iconSize)}
        quality={100}
        alt='Recycle Bin'
        draggable={false}
      />
      <div className='break-words text-xs tracking-[-0.1px] text-white [text-shadow:rgb(0_0_0_/_70%)_0px_0px_3px,_rgb(0_0_0)_0px_0px_2px,_rgb(0_0_0_/_75%)_0px_1px_1px,_rgb(0_0_0)_0px_1px_2px,_rgb(0_0_0_/_75%)_0px_2px_1px,_rgb(0_0_0)_0px_0px_1px]'>
        Recycle Bin
      </div>
    </div>
  )
}

export default App
