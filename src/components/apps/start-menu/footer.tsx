import Image from 'next/image'
import React from 'react'

import { PowerIcon } from '@/components/icons'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu'

const Footer = () => {
  return (
    <div className='flex h-16 w-full items-center justify-between border-t border-divider px-[52px]'>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button className='flex items-center justify-center gap-3 rounded-[3px] px-3 py-1 transition-colors duration-150 hover:bg-white/70'>
            <Image
              src='https://honghong.me/static/images/avatar.png'
              className='rounded-full'
              width={32}
              height={32}
              quality={100}
              alt='User profile picture'
            />
            <div className='text-xs'>Tsz Hong Lai</div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Change account settings</DropdownMenuItem>
          <DropdownMenuItem>Lock</DropdownMenuItem>
          <DropdownMenuItem>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <button className='flex h-10 w-10 items-center justify-center rounded-[3px] transition-colors duration-150 hover:bg-white/70'>
        <PowerIcon />
      </button>
    </div>
  )
}

export default Footer
