import { cn } from '@tszhong0411/utils'
import Image from 'next/image'

import { useSettings } from '@/hooks'
import { sizes } from '@/lib/constants'

type AppProps = {
  focused: boolean
} & React.ComponentPropsWithoutRef<'button'>

const App = (props: AppProps) => {
  const { focused, ...rest } = props
  const { desktop } = useSettings()

  return (
    <button
      type='button'
      className={cn(
        'flex select-none flex-col items-center justify-center gap-0.5 rounded border-black/5 hover:border hover:bg-white/10 focus:outline-none',
        focused && 'bg-[rgba(225,225,225,0.3)]'
      )}
      style={{
        width: sizes.desktop[desktop.iconSize].iconContainer.width,
        height: sizes.desktop[desktop.iconSize].iconContainer.height
      }}
      {...rest}
    >
      <Image
        src='/images/apps/recycle-bin/icon.png'
        width={sizes.desktop[desktop.iconSize].icon}
        height={sizes.desktop[desktop.iconSize].icon}
        quality={100}
        alt='Recycle Bin'
        draggable={false}
        priority
      />
      <div className='break-words text-xs tracking-[-0.1px] text-white [text-shadow:rgb(0_0_0_/_70%)_0px_0px_3px,_rgb(0_0_0)_0px_0px_2px,_rgb(0_0_0_/_75%)_0px_1px_1px,_rgb(0_0_0)_0px_1px_2px,_rgb(0_0_0_/_75%)_0px_2px_1px,_rgb(0_0_0)_0px_0px_1px]'>
        Recycle Bin
      </div>
    </button>
  )
}

export default App
