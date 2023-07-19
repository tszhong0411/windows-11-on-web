import Image from 'next/image'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip'

export type AppProps = {
  name: string
  id: string
  tooltip?: string
}

const PinnedApp = (props: AppProps) => {
  const { name, id, tooltip } = props

  return (
    <Tooltip delayDuration={1000} open={tooltip ? undefined : false}>
      <TooltipTrigger asChild>
        <div className='flex h-[84px] w-24 flex-col items-center justify-center gap-1 rounded px-1 transition-colors duration-150 hover:bg-white/70'>
          <Image
            src={`/static/images/apps/${id}/icon.png`}
            width={32}
            height={32}
            draggable={false}
            alt={name}
            quality={100}
          />
          <div className='text-center text-xs'>{name}</div>
        </div>
      </TooltipTrigger>
      <TooltipContent sideOffset={18}>
        <span>{tooltip}</span>
      </TooltipContent>
    </Tooltip>
  )
}

export default PinnedApp
