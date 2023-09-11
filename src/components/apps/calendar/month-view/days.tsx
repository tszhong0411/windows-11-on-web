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
  for (const i of range(weekdayOfFirstDay)) {
    days.push(firstDay.subtract(weekdayOfFirstDay - i, 'day'))
  }

  // Current month
  for (const i of range(daysInMonth))
    days.push(dayjs(`${year}-${month}-${i + 1}`))

  // Next month (outside of current month, fixed weeks)
  for (const i of range(7 * 6 - days.length)) {
    days.push(lastDay.add(i + 1, 'day'))
  }

  return (
    <div className='flex flex-wrap gap-x-1.5 gap-y-px'>
      {days.map((d) => (
        <Day
          key={d.valueOf()}
          date={d}
          isInMonth={d.year() === year && d.month() + 1 === month}
          selected={selected?.valueOf() === d.valueOf()}
          onClick={() =>
            setSelected((prev) => (prev?.valueOf() === d.valueOf() ? null : d))
          }
        />
      ))}
    </div>
  )
}

export default Days
