import * as SliderPrimitive from '@radix-ui/react-slider'
import { cx } from '@tszhong0411/utils'
import React from 'react'

const SliderRoot = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cx(
        'relative flex h-4 touch-none select-none items-center',
        className
      )}
      {...rest}
    />
  )
})

const SliderTrack = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Track>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Track>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <SliderPrimitive.Track
      ref={ref}
      className={cx(
        'relative h-[5px] grow rounded-full bg-[#8a8a8a]',
        className
      )}
      {...rest}
    />
  )
})

const SliderRange = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Range>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Range>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <SliderPrimitive.Range
      ref={ref}
      className={cx('absolute h-full rounded-full bg-[#005fb8]', className)}
      {...rest}
    />
  )
})

const SliderThumb = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Thumb>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <SliderPrimitive.Thumb
      ref={ref}
      className={cx(
        'group relative block h-5 w-5 rounded-full bg-white',
        'before:absolute before:inset-0 before:-z-10 before:-m-px before:rounded-[inherit] before:bg-gradient',
        className
      )}
      {...rest}
    >
      <span
        className={cx(
          'absolute left-1/2 top-1/2 block h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#005fb8] transition-all duration-100',
          'group-hover:h-[15px] group-hover:w-[15px]',
          'group-active:h-2.5 group-active:w-2.5'
        )}
      />
    </SliderPrimitive.Thumb>
  )
})

SliderRoot.displayName = 'SliderRoot'
SliderTrack.displayName = 'SliderTrack'
SliderRange.displayName = 'SliderRange'
SliderThumb.displayName = 'SliderThumb'

export { SliderRange, SliderRoot, SliderThumb, SliderTrack }
