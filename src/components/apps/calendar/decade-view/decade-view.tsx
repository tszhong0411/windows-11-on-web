import dayjs, { type Dayjs } from 'dayjs'
import { motion } from 'framer-motion'

import { useCalendar } from '@/hooks'
import { range } from '@/utils'

import { variants } from '../calendar'
import Year from './year'

const DecadeView = () => {
  const { date, setDate, setView, drill, setDrill } = useCalendar()

  const day = dayjs(date)

  const minDate = dayjs(`${dayjs().get('year') - 100}-1-1`).valueOf()
  const maxDate = dayjs(`${dayjs().get('year') + 100}-12-31`).valueOf()
  const minYear = dayjs(minDate).year()
  const maxYear = dayjs(maxDate).year()

  const decadeStartYear = Math.floor(day.year() / 10) * 10
  const decadeEndYear = decadeStartYear + 9

  const shouldPush = (year: number) => year >= minYear && year <= maxYear

  const years: Dayjs[] = []

  const getYearRow = (year: number) => {
    const chunkSize = 4
    const yearArray = range(minYear, maxYear)

    for (let i = 0; i < yearArray.length; i += chunkSize) {
      const chunk = yearArray.slice(i, i + chunkSize)
      const index = chunk.indexOf(year)
      if (index !== -1) return index
    }

    return null
  }

  const yearRow = getYearRow(decadeStartYear)

  if (typeof yearRow === 'number') {
    range(yearRow).map((i) => {
      const year = decadeStartYear - i - 1
      shouldPush(year) && years.unshift(dayjs(`${year}-1-1`))
    })
  }

  range(decadeStartYear, decadeEndYear + 1).map((year) => {
    shouldPush(year) && years.push(dayjs(`${year}-1-1`))
  })

  const yearsLength = years.length
  range(16 - yearsLength).map((i) => {
    const newYear = years[yearsLength - 1].year() + 1 + i
    shouldPush(newYear) && years.push(dayjs(`${newYear}-1-1`))
  })

  return (
    <motion.div
      variants={variants}
      initial={`${drill}Initial`}
      animate='animate'
      exit={`${drill}Exit`}
      className='flex flex-wrap gap-x-5 gap-y-2.5 px-2'
    >
      {years.map((d) => (
        <Year
          key={d.valueOf()}
          date={d}
          isInDecade={d.year() >= decadeStartYear && d.year() <= decadeEndYear}
          onClick={() => {
            setDate(day.set('year', d.year()).set('month', d.month()))
            setDrill('up')
            setView('year')
          }}
        />
      ))}
    </motion.div>
  )
}

export default DecadeView
