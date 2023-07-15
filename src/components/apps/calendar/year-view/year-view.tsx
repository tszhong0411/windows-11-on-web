import dayjs, { Dayjs } from 'dayjs'
import { motion } from 'framer-motion'

import { useCalendar } from '@/hooks'

import { range } from '@/utils'

import Month from './month'
import { variants } from '../calendar'
import { getMaxDate } from '../utils'

const YearView = () => {
  const { date, setDate, setView, drill, setDrill } = useCalendar()

  const day = dayjs(date)
  const year = day.year()

  const months: Dayjs[] = []

  const maxDate = getMaxDate('year')

  const isMaxYear = day.get('year') === dayjs(maxDate).get('year')

  isMaxYear && range(4).map((i) => months.push(dayjs(`${year - 1}-${i + 9}-1`)))

  range(12).map((i) => months.push(dayjs(`${year}-${i + 1}-1`)))

  !isMaxYear &&
    range(4).map((i) => months.push(dayjs(`${year + 1}-${i + 1}-1`)))

  return (
    <motion.div
      variants={variants}
      initial={`${drill}Initial`}
      animate='animate'
      exit={`${drill}Exit`}
      className='flex flex-wrap gap-x-5 gap-y-2.5 px-2'
    >
      {months.map((date) => (
        <Month
          key={date.valueOf()}
          date={date}
          isInYear={date.year() === year}
          onClick={() => {
            setDate(day.set('year', date.year()).set('month', date.month()))
            setDrill('up')
            setView('month')
          }}
        />
      ))}
    </motion.div>
  )
}

export default YearView
