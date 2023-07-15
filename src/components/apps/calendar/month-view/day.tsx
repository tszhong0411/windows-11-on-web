import { cx } from '@tszhong0411/utils'
import dayjs, { Dayjs } from 'dayjs'
import isToday from 'dayjs/plugin/isToday'

import Tile from '../tile'

type DayProps = {
  date: Dayjs
  isInMonth: boolean
  selected: boolean
} & React.ComponentPropsWithoutRef<'div'>

dayjs.extend(isToday)

const Day = (props: DayProps) => {
  const { date, isInMonth, selected, ...rest } = props

  return (
    <Tile
      className={cx(
        'relative h-[41px] w-[41px]',
        !isInMonth &&
          'text-[rgba(0,0,0,0.6063)] hover:text-[rgba(0,0,0,0.8956)] active:text-[rgba(0,0,0,0.4458)]',
        date.isToday() &&
          'bg-[#005fb8] text-white hover:bg-[rgba(0,95,184,0.9)] hover:text-white active:bg-[rgba(0,95,184,0.8)] active:text-white/70',
        selected &&
          'border border-[#005fb8] text-[#003e92] hover:border-[rgba(0,95,184,0.9)] active:border-[rgba(0,95,184,0.8)] active:text-[#005fb8]',
        selected &&
          date.isToday() &&
          'text-white before:absolute before:inset-0 before:rounded-full before:border before:border-white active:text-white'
      )}
      {...rest}
    >
      {date.date()}
    </Tile>
  )
}

export default Day
