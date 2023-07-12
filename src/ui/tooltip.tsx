import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cx } from '@tszhong0411/utils'
import React from 'react'

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>((props, ref) => {
  const { className, sideOffset = 4, ...rest } = props

  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cx(
        'relative rounded bg-[#f9f9f9] px-[10px] py-[6px] text-center text-xs shadow-[0_4px_8px_0_rgba(0,0,0,0.14)]',
        'before:absolute before:inset-0 before:-z-10 before:-m-px before:rounded-[inherit] before:bg-gradient',
        className
      )}
      {...rest}
    />
  )
})

TooltipContent.displayName = 'TooltipContent'

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
