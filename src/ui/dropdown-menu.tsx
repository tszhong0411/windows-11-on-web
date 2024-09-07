import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { cn } from '@tszhong0411/utils'
import { forwardRef } from 'react'

import { CheckMarkIcon, ChevronRightIcon, PointIcon } from '@/components/icons'

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuGroup = DropdownMenuPrimitive.Group
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuSub = DropdownMenuPrimitive.Sub
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuContent = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>((props, ref) => {
  const { className, sideOffset = 5, ...rest } = props

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          'acrylic z-[9500] rounded-lg border border-[rgba(0,0,0,0.0578)] py-[5px] shadow-flyout',
          className
        )}
        {...rest}
      />
    </DropdownMenuPrimitive.Portal>
  )
})

const DropdownMenuItem = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        'mx-[5px] flex h-[28px] select-none items-center rounded-[3px] px-2.5 text-sm hover:bg-[--subtle-secondary] focus:outline-none active:bg-[rgba(0,0,0,0.0241)] [&:not(:first-child):not(div[role=separator]+div[role=menuitem])]:mt-1',
        className
      )}
      {...rest}
    />
  )
})

const DropdownMenuLabel = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>((props, ref) => {
  const { className, ...rest } = props

  return <DropdownMenuPrimitive.Label ref={ref} className={cn('', className)} {...rest} />
})

const DropdownMenuCheckboxItem = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        'flex h-[28px] select-none items-center rounded-[3px] px-2.5 pl-10 text-sm hover:bg-[--subtle-secondary] focus:outline-none active:bg-[rgba(0,0,0,0.0241)] active:text-[--text-secondary] [&:not(:first-child):not(div[role=separator]+div[role=menuitem])]:mt-1',
        className
      )}
      {...rest}
    >
      <DropdownMenuPrimitive.ItemIndicator className='absolute left-[18px]'>
        <CheckMarkIcon width={10} height={10} />
      </DropdownMenuPrimitive.ItemIndicator>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
})

const DropdownMenuRadioItem = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={cn(
        'flex h-[28px] select-none items-center rounded-[3px] px-2.5 pl-10 text-sm hover:bg-[--subtle-secondary] focus:outline-none active:bg-[rgba(0,0,0,0.0241)] active:text-[--text-secondary] [&:not(:first-child):not(div[role=separator]+div[role=menuitem])]:mt-1',
        className
      )}
      {...rest}
    >
      <DropdownMenuPrimitive.ItemIndicator className='absolute left-[18px]'>
        <PointIcon />
      </DropdownMenuPrimitive.ItemIndicator>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
})

const DropdownMenuSeparator = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cn('my-1.5 h-px w-full bg-[rgba(0,0,0,0.0803)]', className)}
      {...rest}
    />
  )
})

const DropdownMenuSubTrigger = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        'flex h-[28px] select-none items-center rounded-[3px] px-2.5 text-sm focus:outline-none [&:not(:first-child):not(div[role=separator]+div[role=menuitem])]:mt-1',
        'data-[state=open]:bg-[--subtle-secondary] data-[state=closed]:hover:bg-[--subtle-secondary] data-[state=closed]:active:bg-[rgba(0,0,0,0.0241)] data-[state=closed]:active:text-[--text-secondary]',
        className
      )}
      {...rest}
    >
      {children}
      <ChevronRightIcon width={10} height={10} className='ml-auto fill-[#5e5e5e]' />
    </DropdownMenuPrimitive.SubTrigger>
  )
})

const DropdownMenuSubContent = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cn(
        'acrylic z-[9600] rounded-lg border border-[rgba(0,0,0,0.0578)] p-[5px] shadow-[0px_8px_16px_0_rgba(0,0,0,0.14)]',
        className
      )}
      {...rest}
    />
  )
})

const DropdownMenuArrow = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Arrow>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <DropdownMenuPrimitive.Arrow
      ref={ref}
      className={cn('', className)}
      strokeWidth={4}
      {...rest}
    />
  )
})

DropdownMenuContent.displayName = 'DropdownContent'
DropdownMenuItem.displayName = 'DropdownItem'
DropdownMenuLabel.displayName = 'DropdownLabel'
DropdownMenuCheckboxItem.displayName = 'DropdownCheckboxItem'
DropdownMenuRadioItem.displayName = 'DropdownRadioItem'
DropdownMenuSeparator.displayName = 'DropdownSeparator'
DropdownMenuSubTrigger.displayName = 'DropdownSubTDropdownMenuSubTrigger'
DropdownMenuSubContent.displayName = 'DropdownSubTDropdownMenuSubContent'
DropdownMenuArrow.displayName = 'DropdownSubTDropdownMenuArrow'

export {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
}
