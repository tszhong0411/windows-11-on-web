import dayjs, { Dayjs } from 'dayjs'
import { motion } from 'framer-motion'

import { useCalendar } from '@/hooks'

import { range } from '@/utils'

import Year from './year'
import { variants } from '../calendar'

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

  const years: Array<Dayjs> = []

  const getYearRow = (year: number) => {
    const chunkSize = 4
    const yearArray = range(minYear, maxYear)

    for (let i = 0; i < yearArray.length; i += chunkSize) {
      const chunk = yearArray.slice(i, i + chunkSize)
      const index = chunk.findIndex((e) => e === year)
      if (index !== -1) return index
    }

    return
  }

  getYearRow(decadeStartYear) &&
    range(getYearRow(decadeStartYear) as number).map((i) => {
      const year = decadeStartYear - i - 1
      shouldPush(year) && years.unshift(dayjs(`${year}-1-1`))
    })

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
      {years.map((date) => (
        <Year
          key={date.valueOf()}
          date={date}
          isInDecade={
            date.year() >= decadeStartYear && date.year() <= decadeEndYear
          }
          onClick={() => {
            setDate(day.set('year', date.year()).set('month', date.month()))
            setDrill('up')
            setView('year')
          }}
        />
      ))}
    </motion.div>
  )
}

export default DecadeView
