import { cx } from '@tszhong0411/utils'
import React from 'react'

type ScrollAreaProps = React.ComponentPropsWithoutRef<'div'>

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  (props, ref) => {
    const { children, className, ...rest } = props

    return (
      <div ref={ref} className={cx('scroll-area', className)} {...rest}>
        {children}
      </div>
    )
  }
)

ScrollArea.displayName = 'ScrollArea'

export { ScrollArea }
