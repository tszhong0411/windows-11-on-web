import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { cx } from '@tszhong0411/utils'
import React from 'react'

import { CheckmarkIcon, ChevronRightIcon, PointIcon } from '@/components/icons'

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuGroup = DropdownMenuPrimitive.Group
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuSub = DropdownMenuPrimitive.Sub
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>((props, ref) => {
  const { className, sideOffset = 5, ...rest } = props

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cx(
          'acrylic z-50 rounded-lg border border-[rgba(0,0,0,0.0578)] py-[5px] shadow-flyout',
          className
        )}
        {...rest}
      />
    </DropdownMenuPrimitive.Portal>
  )
})

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cx(
        'mx-[5px] flex h-[28px] select-none items-center rounded-[3px] px-2.5 text-sm hover:bg-[rgba(0,0,0,0.0373)] focus:outline-none active:bg-[rgba(0,0,0,0.0241)] active:text-secondary [&:not(:first-child):not(div[role=separator]+div[role=menuitem])]:mt-1',
        className
      )}
      {...rest}
    />
  )
})

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={cx('', className)}
      {...rest}
    />
  )
})

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      className={cx(
        'flex h-[28px] select-none items-center rounded-[3px] px-2.5 pl-10 text-sm hover:bg-[rgba(0,0,0,0.0373)] focus:outline-none active:bg-[rgba(0,0,0,0.0241)] active:text-secondary [&:not(:first-child):not(div[role=separator]+div[role=menuitem])]:mt-1',
        className
      )}
      {...rest}
    >
      <DropdownMenuPrimitive.ItemIndicator className='absolute left-[18px]'>
        <CheckmarkIcon width={10} height={10} />
      </DropdownMenuPrimitive.ItemIndicator>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
})

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={cx(
        'flex h-[28px] select-none items-center rounded-[3px] px-2.5 pl-10 text-sm hover:bg-[rgba(0,0,0,0.0373)] focus:outline-none active:bg-[rgba(0,0,0,0.0241)] active:text-secondary [&:not(:first-child):not(div[role=separator]+div[role=menuitem])]:mt-1',
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

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cx('my-1.5 h-px w-full bg-[rgba(0,0,0,0.0803)]', className)}
      {...rest}
    />
  )
})

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cx(
        'flex h-[28px] select-none items-center rounded-[3px] px-2.5 text-sm focus:outline-none [&:not(:first-child):not(div[role=separator]+div[role=menuitem])]:mt-1',
        'data-[state=open]:bg-[rgba(0,0,0,0.0373)] data-[state=closed]:hover:bg-[rgba(0,0,0,0.0373)] data-[state=closed]:active:bg-[rgba(0,0,0,0.0241)] data-[state=closed]:active:text-secondary',
        className
      )}
      {...rest}
    >
      {children}
      <ChevronRightIcon
        width={10}
        height={10}
        className='ml-auto fill-[#5e5e5e]'
      />
    </DropdownMenuPrimitive.SubTrigger>
  )
})

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cx(
        'acrylic z-50 rounded-lg border border-[rgba(0,0,0,0.0578)] p-[5px] shadow-[0px_8px_16px_0_rgba(0,0,0,0.14)]',
        className
      )}
      {...rest}
    />
  )
})

const DropdownMenuArrow = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Arrow>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <DropdownMenuPrimitive.Arrow
      ref={ref}
      className={cx('', className)}
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
  DropdownMenuTrigger,
}
