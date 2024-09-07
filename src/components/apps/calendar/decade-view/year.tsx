import { cn } from '@tszhong0411/utils'
import dayjs, { type Dayjs } from 'dayjs'

import Tile from '../tile'

type MonthProps = {
  date: Dayjs
  isInDecade: boolean
} & React.ComponentPropsWithoutRef<'div'>

const Year = (props: MonthProps) => {
  const { date, isInDecade, ...rest } = props

  const isCurrentYear = date.isSame(dayjs(), 'year')

  return (
    <Tile
      className={cn(
        'size-16',
        !isInDecade &&
          'text-[--text-secondary] hover:text-[rgba(0,0,0,0.8956)] active:text-[rgba(0,0,0,0.4458)]',
        isCurrentYear &&
          'bg-[#005fb8] text-white hover:bg-[rgba(0,95,184,0.9)] hover:text-white active:bg-[rgba(0,95,184,0.8)] active:text-white/70'
      )}
      {...rest}
    >
      {date.format('YYYY')}
    </Tile>
  )
}

export default Year
