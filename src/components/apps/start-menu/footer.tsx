import Image from 'next/image'

import {
  ArrowCounterclockwiseIcon,
  LockClosedIcon,
  PersonSettingsIcon,
  PowerIcon,
  SettingsIcon,
  SignOutIcon
} from '@/components/icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/ui/dropdown-menu'

const Footer = () => {
  return (
    <div className='flex h-16 w-full items-center justify-between border-t border-divider px-[52px]'>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button
            className='flex items-center justify-center gap-3 rounded-[3px] px-3 py-1 transition-colors duration-150 hover:bg-white/70'
            type='button'
          >
            <Image
              src='https://honghong.me/images/avatar.png'
              className='rounded-full'
              width={32}
              height={32}
              quality={100}
              alt='User profile'
            />
            <div className='text-xs'>Hong</div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <PersonSettingsIcon width={16} height={16} className='mr-3' />
            Change account settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LockClosedIcon width={16} height={16} className='mr-3' />
            Lock
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignOutIcon width={16} height={16} className='mr-3' />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button
            className='flex size-10 items-center justify-center rounded-[3px] transition-colors duration-150 hover:bg-white/70'
            type='button'
          >
            <PowerIcon />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <SettingsIcon width={16} height={16} className='mr-3' />
            Sign-in options
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <PowerIcon width={16} height={16} className='mr-3' />
            Shut down
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ArrowCounterclockwiseIcon width={16} height={16} className='mr-3' />
            Restart
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Footer
