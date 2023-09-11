import { EditIcon, SettingsIcon } from '@/components/icons'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip'

const Footer = () => {
  return (
    <div className='flex h-12 w-full items-center justify-end border-t border-[rgba(0,0,0,0.0803)] px-2'>
      <div className='flex items-center gap-1'>
        {/* Edit quick settings */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className='flex h-10 w-9 items-center justify-center rounded hover:bg-[--subtle-secondary]'
              type='button'
            >
              <EditIcon width={16} height={16} />
            </button>
          </TooltipTrigger>
          <TooltipContent>Edit quick settings</TooltipContent>
        </Tooltip>
        {/* All settings */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className='flex h-10 w-9 cursor-default items-center justify-center rounded hover:bg-[--subtle-secondary]'
              type='button'
            >
              <SettingsIcon width={16} height={16} />
            </button>
          </TooltipTrigger>
          <TooltipContent>All settings</TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}

export default Footer
