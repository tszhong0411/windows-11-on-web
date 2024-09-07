import { cn } from '@tszhong0411/utils'

type TileProps = React.ComponentPropsWithoutRef<'div'>

const Tile = (props: TileProps) => {
  const { className, ...rest } = props

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full text-sm hover:bg-[--subtle-secondary] active:bg-[rgba(0,0,0,0.0241)] active:text-[--text-secondary]',
        className
      )}
      {...rest}
    />
  )
}

export default Tile
