import { cx } from '@tszhong0411/utils'
import dayjs, { Dayjs } from 'dayjs'

import Tile from '../tile'

type MonthProps = {
  date: Dayjs
  isInYear: boolean
} & React.ComponentPropsWithoutRef<'div'>

const Month = (props: MonthProps) => {
  const { date, isInYear, ...rest } = props

  const isCurrentMonth = date.isSame(dayjs(), 'month')

  return (
    <Tile
      className={cx(
        'h-16 w-16',
        !isInYear &&
          'text-[--text-secondary] hover:text-[rgba(0,0,0,0.8956)] active:text-[rgba(0,0,0,0.4458)]',
        isCurrentMonth &&
          'bg-[#005fb8] text-white hover:bg-[rgba(0,95,184,0.9)] hover:text-white active:bg-[rgba(0,95,184,0.8)] active:text-white/70'
      )}
      {...rest}
    >
      {date.format('MMM')}
    </Tile>
  )
}

export default Month
