import { cx } from '@tszhong0411/utils'

type ToggleProps = {
  label: string
  active: boolean
  icon: React.ReactNode
} & React.ComponentPropsWithoutRef<'div'>

const Toggle = (props: ToggleProps) => {
  const { label, active, icon, ...rest } = props

  return (
    <div className='group flex h-[72px] w-[98px] flex-col justify-between'>
      <div
        className={cx(
          'relative flex h-[48px] w-[98px] items-center justify-center rounded',
          'before:absolute before:inset-0 before:-z-10 before:-m-px before:rounded-[inherit] before:bg-gradient',
          active
            ? 'bg-[#0067c0] text-white hover:bg-[#003e92] group-active:bg-[rgba(0,95,184,0.8)] group-active:text-white/70'
            : 'bg-white/70 text-black hover:bg-[rgba(249,249,249,0.5)]'
        )}
        {...rest}
      >
        {icon}
      </div>
      <div className='text-center text-xs leading-[15.96px]'>{label}</div>
    </div>
  )
}

export default Toggle
