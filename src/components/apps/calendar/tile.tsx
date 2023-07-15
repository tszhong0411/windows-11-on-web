import { cx } from '@tszhong0411/utils'

type TileProps = React.ComponentPropsWithoutRef<'div'>

const Tile = (props: TileProps) => {
  const { className, ...rest } = props

  return (
    <div
      className={cx(
        'flex items-center justify-center rounded-full text-sm hover:bg-[rgba(0,0,0,0.0373)] active:bg-[rgba(0,0,0,0.0241)] active:text-[rgba(0,0,0,0.6063)]',
        className
      )}
      {...rest}
    />
  )
}

export default Tile
