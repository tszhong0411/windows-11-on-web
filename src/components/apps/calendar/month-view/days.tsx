import dayjs, { Dayjs } from 'dayjs'
import React from 'react'

import { useCalendar } from '@/hooks'

import { range } from '@/utils'

import Day from './day'

const Days = () => {
  const [selected, setSelected] = React.useState<Dayjs | null>(null)
  const { date } = useCalendar()

  const day = dayjs(date)
  const year = day.year()
  const month = day.month() + 1

  const daysInMonth = day.daysInMonth()

  const firstDay = day.set('date', 1).startOf('day')
  const lastDay = day.set('date', daysInMonth).startOf('day')
  const weekdayOfFirstDay = firstDay.day()

  const days: Dayjs[] = []

  // Previous month (outside of current month)
  range(weekdayOfFirstDay).forEach((i) => {
    days.push(firstDay.subtract(weekdayOfFirstDay - i, 'day'))
  })

  // Current month
  range(daysInMonth).forEach((i) =>
    days.push(dayjs(`${year}-${month}-${i + 1}`))
  )

  // Next month (outside of current month, fixed weeks)
  range(7 * 6 - days.length).forEach((i) => {
    days.push(lastDay.add(i + 1, 'day'))
  })

  return (
    <div className='flex flex-wrap gap-x-1.5 gap-y-px'>
      {days.map((date) => (
        <Day
          key={date.valueOf()}
          date={date}
          isInMonth={date.year() === year && date.month() + 1 === month}
          selected={selected?.valueOf() === date.valueOf()}
          onClick={() =>
            setSelected((prev) =>
              prev?.valueOf() === date.valueOf() ? null : date
            )
          }
        />
      ))}
    </div>
  )
}

export default Days
