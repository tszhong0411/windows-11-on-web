import { cn } from '@tszhong0411/utils'
import { forwardRef } from 'react'

type ButtonProps = React.ComponentPropsWithoutRef<'button'>

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <button
      ref={ref}
      className={cn(
        'relative cursor-default rounded bg-[#f9f9f9]',
        'hover:bg-[#f2f2f2] active:bg-[#eeeeee]',
        'before:absolute before:inset-0 before:-z-10 before:-m-px before:rounded-[inherit] before:bg-gradient disabled:before:bg-[rgba(0,0,0,0.0578)]',
        'disabled:bg-[#f6f6f6] disabled:text-[rgba(0,0,0,0.3614)]',
        className
      )}
      type='button'
      {...rest}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export { Button }
