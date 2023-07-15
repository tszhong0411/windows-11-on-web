import { cx } from '@tszhong0411/utils'
import dayjs from 'dayjs'

import { useCalendar } from '@/hooks'

import { CaretDownFilledIcon, CaretUpFilledIcon } from '@/components/icons'

import { getMaxDate, getMinDate } from './utils'

const Navigation = () => {
  const { view, setView, date, setDate, setDrill } = useCalendar()

  const day = dayjs(date)
  const year = day.year()
  const month = day.month()

  const isMonthView = view === 'month'
  const isYearView = view === 'year'
  const isDecadeView = view === 'decade'

  const decadeStartYear = Math.floor(year / 10) * 10
  const decadeEndYear = decadeStartYear + 9

  const minDate = getMinDate(view)
  const maxDate = getMaxDate(view)

  const minMonth = dayjs(minDate).month()
  const maxMonth = dayjs(maxDate).month()
  const minYear = dayjs(minDate).year()
  const maxYear = dayjs(maxDate).year()

  const isMinYear = isYearView && year === minYear
  const isMaxYear = isYearView && year === maxYear
  const isMinMonth = isMonthView && year === minYear && month === minMonth
  const isMaxMonth = isMonthView && year === maxYear && month === maxMonth
  const isMinDecade = isDecadeView && decadeStartYear - 1 < minYear
  const isMaxDecade = isDecadeView && decadeEndYear + 4 > maxYear

  const navigateHandler = () => {
    if (isMonthView) setView('year')
    if (isYearView) setView('decade')
    setDrill('down')
  }

  const addHandler = () => {
    if (isMaxDecade || isMaxYear || isMaxMonth) return
    if (isMonthView || isYearView) setDate(day.add(1, view))
    if (isDecadeView) setDate(day.add(10, 'year'))
  }

  const subtractHandler = () => {
    if (isMinDecade || isMinYear || isMinMonth) return
    if (isMonthView || isYearView) setDate(day.subtract(1, view))
    if (isDecadeView) setDate(day.subtract(10, 'year'))
  }

  return (
    <div className='mb-3 mt-2.5 flex h-[34px] items-center justify-between px-2'>
      <button
        className={cx(
          'flex h-[34px] w-[238px] cursor-default items-center px-2 text-sm font-semibold',
          view === 'decade' && 'text-[rgba(0,0,0,0.345)]',
          view !== 'decade' &&
            'hover:bg-[rgba(0,0,0,0.0373)] active:bg-[rgba(0,0,0,0.0241)] active:text-[rgba(0,0,0,0.6063)]'
        )}
        onClick={navigateHandler}
      >
        {view === 'month' && dayjs(date).format('MMMM YYYY')}
        {view === 'year' && dayjs(date).format('YYYY')}
        {view === 'decade' && `${decadeStartYear} - ${decadeEndYear}`}
      </button>
      <div className='flex gap-2'>
        <button
          className={cx(
            'flex h-[34px] w-8 cursor-default items-center justify-center',
            !(isMinDecade || isMinYear || isMinMonth) &&
              'hover:bg-[rgba(0,0,0,0.0373)] active:bg-[rgba(0,0,0,0.0241)]'
          )}
          onClick={subtractHandler}
          disabled={isMinDecade || isMinYear || isMinMonth}
        >
          <CaretUpFilledIcon
            width={8}
            height={8}
            className='fill-[rgba(0,0,0,0.4458)]'
          />
        </button>
        <button
          className={cx(
            'flex h-[34px] w-8 cursor-default items-center justify-center',
            !(isMaxDecade || isMaxYear || isMaxMonth) &&
              'hover:bg-[rgba(0,0,0,0.0373)] active:bg-[rgba(0,0,0,0.0241)]'
          )}
          onClick={addHandler}
          disabled={isMaxDecade || isMaxYear || isMaxMonth}
        >
          <CaretDownFilledIcon
            width={8}
            height={8}
            className='fill-[rgba(0,0,0,0.4458)]'
          />
        </button>
      </div>
    </div>
  )
}

export default Navigation
