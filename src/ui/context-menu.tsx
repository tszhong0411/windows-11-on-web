import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { cn } from '@tszhong0411/utils'
import { forwardRef } from 'react'

import { CheckMarkIcon, ChevronRightIcon, PointIcon } from '@/components/icons'

const ContextMenu = ContextMenuPrimitive.Root
const ContextMenuTrigger = ContextMenuPrimitive.Trigger
const ContextMenuGroup = ContextMenuPrimitive.Group
const ContextMenuPortal = ContextMenuPrimitive.Portal
const ContextMenuSub = ContextMenuPrimitive.Sub
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuContent = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        ref={ref}
        className={cn(
          'acrylic z-[9500] rounded-lg border border-[rgba(0,0,0,0.0578)] p-[5px] shadow-flyout [&_[role=separator]]:-mx-0.5',
          className
        )}
        {...rest}
      />
    </ContextMenuPrimitive.Portal>
  )
})

const ContextMenuItem = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <ContextMenuPrimitive.Item
      ref={ref}
      className={cn(
        'flex h-[28px] select-none items-center rounded-[3px] px-2.5 text-sm hover:bg-[--subtle-secondary] focus:outline-none active:bg-[rgba(0,0,0,0.0241)] active:text-[--text-secondary] [&:not(:first-child):not(div[role=separator]+div[role=menuitem])]:mt-1',
        className
      )}
      {...rest}
    >
      {children}
    </ContextMenuPrimitive.Item>
  )
})

const ContextMenuLabel = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label>
>((props, ref) => {
  const { className, ...rest } = props

  return <ContextMenuPrimitive.Label ref={ref} className={cn('', className)} {...rest} />
})

const ContextMenuCheckboxItem = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <ContextMenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        'group flex h-[28px] select-none items-center rounded-[3px] px-2.5 pl-10 text-sm',
        'hover:bg-[--subtle-secondary] focus:outline-none active:bg-[rgba(0,0,0,0.0241)] active:text-[--text-secondary] [&:not(:first-child):not(div[role=separator]+div[role=menuitem])]:mt-1',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-40',
        className
      )}
      {...rest}
    >
      <ContextMenuPrimitive.ItemIndicator className='absolute left-[18px] group-data-[disabled]:hidden'>
        <CheckMarkIcon width={10} height={10} />
      </ContextMenuPrimitive.ItemIndicator>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
})

const ContextMenuRadioItem = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <ContextMenuPrimitive.RadioItem
      ref={ref}
      className={cn(
        'group flex h-[28px] select-none items-center rounded-[3px] px-2.5 pl-10 text-sm',
        'hover:bg-[--subtle-secondary] focus:outline-none active:bg-[rgba(0,0,0,0.0241)] active:text-[--text-secondary] [&:not(:first-child):not(div[role=separator]+div[role=menuitem])]:mt-1',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-40',
        className
      )}
      {...rest}
    >
      <ContextMenuPrimitive.ItemIndicator className='absolute left-[18px] group-data-[disabled]:hidden'>
        <PointIcon />
      </ContextMenuPrimitive.ItemIndicator>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
})

const ContextMenuSeparator = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <ContextMenuPrimitive.Separator
      ref={ref}
      className={cn('my-1.5 h-px w-full bg-[rgba(0,0,0,0.0803)]', className)}
      {...rest}
    />
  )
})

const ContextMenuSubTrigger = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <ContextMenuPrimitive.SubTrigger
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
    </ContextMenuPrimitive.SubTrigger>
  )
})

const ContextMenuSubContent = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <ContextMenuPrimitive.SubContent
      ref={ref}
      className={cn(
        'acrylic z-[9600] rounded-lg border border-[rgba(0,0,0,0.0578)] py-[5px] shadow-[0px_8px_16px_0_rgba(0,0,0,0.14)] [&_[role^=menuitem]]:mx-[5px]',
        className
      )}
      {...rest}
    />
  )
})

const ContextMenuArrow = forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Arrow>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <ContextMenuPrimitive.Arrow ref={ref} className={cn('', className)} strokeWidth={4} {...rest} />
  )
})

const ContextMenuShortcut = (props: React.ComponentPropsWithoutRef<'span'>) => {
  const { className, ...rest } = props

  return <span className={cn('ml-auto text-xs text-[#5e5e5e]', className)} {...rest} />
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
  ContextMenuTrigger
}
