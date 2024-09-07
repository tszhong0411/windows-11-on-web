import { cn } from '@tszhong0411/utils'
import { forwardRef } from 'react'

type SelectionProps = React.ComponentPropsWithoutRef<'div'>

// Since Selection is defined as a interface, we can't use it as a component
const StyledSelection = forwardRef<HTMLDivElement, SelectionProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <div
      ref={ref}
      className={cn('absolute select-none border border-[#006ec6] bg-blue-500/30', className)}
      {...rest}
    />
  )
})

StyledSelection.displayName = 'Selection'

export { StyledSelection }
