import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { cx } from '@tszhong0411/utils'
import React from 'react'

import { CheckmarkIcon, ChevronRightIcon, PointIcon } from '@/components/icons'

const ContextMenu = ContextMenuPrimitive.Root
const ContextMenuTrigger = ContextMenuPrimitive.Trigger
const ContextMenuGroup = ContextMenuPrimitive.Group
const ContextMenuPortal = ContextMenuPrimitive.Portal
const ContextMenuSub = ContextMenuPrimitive.Sub
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        ref={ref}
        className={cx(
          'acrylic rounded-lg border border-[rgba(0,0,0,0.0578)] p-[5px] shadow-flyout',
          className
        )}
        {...rest}
      />
    </ContextMenuPrimitive.Portal>
  )
})

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <ContextMenuPrimitive.Item
      ref={ref}
      className={cx(
        'flex h-[28px] select-none items-center rounded-[3px] px-2.5 text-sm hover:bg-[rgba(0,0,0,0.0373)] focus:outline-none active:bg-[rgba(0,0,0,0.0241)] active:text-[rgba(0,0,0,0.6063)] [&:not(:first-child):not(div[role=separator]+div[role=menuitem])]:mt-1',
        className
      )}
      {...rest}
    >
      {children}
    </ContextMenuPrimitive.Item>
  )
})

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <ContextMenuPrimitive.Label
      ref={ref}
      className={cx('', className)}
      {...rest}
    />
  )
})

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <ContextMenuPrimitive.CheckboxItem
      ref={ref}
      className={cx(
        'flex h-[28px] select-none items-center rounded-[3px] px-2.5 pl-10 text-sm hover:bg-[rgba(0,0,0,0.0373)] focus:outline-none active:bg-[rgba(0,0,0,0.0241)] active:text-[rgba(0,0,0,0.6063)] [&:not(:first-child):not(div[role=separator]+div[role=menuitem])]:mt-1',
        className
      )}
      {...rest}
    >
      <ContextMenuPrimitive.ItemIndicator className='absolute left-[18px]'>
        <CheckmarkIcon width={10} height={10} />
      </ContextMenuPrimitive.ItemIndicator>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
})

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <ContextMenuPrimitive.RadioItem
      ref={ref}
      className={cx(
        'flex h-[28px] select-none items-center rounded-[3px] px-2.5 pl-10 text-sm hover:bg-[rgba(0,0,0,0.0373)] focus:outline-none active:bg-[rgba(0,0,0,0.0241)] active:text-[rgba(0,0,0,0.6063)] [&:not(:first-child):not(div[role=separator]+div[role=menuitem])]:mt-1',
        className
      )}
      {...rest}
    >
      <ContextMenuPrimitive.ItemIndicator className='absolute left-[18px]'>
        <PointIcon />
      </ContextMenuPrimitive.ItemIndicator>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
})

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <ContextMenuPrimitive.Separator
      ref={ref}
      className={cx('my-1.5 h-px w-full bg-[rgba(0,0,0,0.0803)]', className)}
      {...rest}
    />
  )
})

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <ContextMenuPrimitive.SubTrigger
      ref={ref}
      className={cx(
        'flex h-[28px] select-none items-center rounded-[3px] px-2.5 text-sm focus:outline-none [&:not(:first-child):not(div[role=separator]+div[role=menuitem])]:mt-1',
        'data-[state=open]:bg-[rgba(0,0,0,0.0373)] data-[state=closed]:hover:bg-[rgba(0,0,0,0.0373)] data-[state=closed]:active:bg-[rgba(0,0,0,0.0241)] data-[state=closed]:active:text-[rgba(0,0,0,0.6063)]',
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
    </ContextMenuPrimitive.SubTrigger>
  )
})

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <ContextMenuPrimitive.SubContent
      ref={ref}
      className={cx(
        'acrylic rounded-lg border border-[rgba(0,0,0,0.0578)] p-[5px] shadow-[0px_8px_16px_0_rgba(0,0,0,0.14)]',
        className
      )}
      {...rest}
    />
  )
})

const ContextMenuArrow = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Arrow>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <ContextMenuPrimitive.Arrow
      ref={ref}
      className={cx('', className)}
      strokeWidth={4}
      {...rest}
    />
  )
})

const ContextMenuShortcut = (props: React.ComponentPropsWithoutRef<'span'>) => {
  const { className, ...rest } = props

  return (
    <span
      className={cx('ml-auto text-xs text-[#5e5e5e]', className)}
      {...rest}
    />
  )
}

ContextMenuContent.displayName = 'ContextMenuContent'
ContextMenuItem.displayName = 'ContextMenuItem'
ContextMenuLabel.displayName = 'ContextMenuLabel'
ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem'
ContextMenuRadioItem.displayName = 'ContextMenuRadioItem'
ContextMenuSeparator.displayName = 'ContextMenuSeparator'
ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger'
ContextMenuSubContent.displayName = 'ContextMenuSubContent'
ContextMenuArrow.displayName = 'ContextMenuArrow'

export {
  ContextMenu,
  ContextMenuArrow,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
}
