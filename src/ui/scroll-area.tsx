import { cn } from '@tszhong0411/utils'
import { forwardRef } from 'react'

type ScrollAreaProps = React.ComponentPropsWithoutRef<'div'>

const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <div ref={ref} className={cn('scroll-area', className)} {...rest}>
      {children}
    </div>
  )
})

ScrollArea.displayName = 'ScrollArea'

export { ScrollArea }
