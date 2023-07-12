import { cx } from '@tszhong0411/utils'
import React from 'react'

type ButtonProps = React.ComponentPropsWithoutRef<'button'>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, className, ...rest } = props

    return (
      <button
        ref={ref}
        className={cx(
          'relative rounded bg-[#f9f9f9]',
          'hover:bg-[#f2f2f2] active:bg-[#eeeeee]',
          'before:absolute before:inset-0 before:-z-10 before:-m-px before:rounded-[inherit] before:bg-gradient',
          className
        )}
        type='button'
        {...rest}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
