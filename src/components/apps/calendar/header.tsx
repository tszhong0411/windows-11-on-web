import dayjs from 'dayjs'

import { ChevronDownIcon, ChevronUpIcon } from '@/components/icons'
import { useCalendar, useSettings } from '@/hooks'
import Button from '@/ui/button'

const Header = () => {
  const { calendarExpanded, setCalendarExpanded } = useSettings()
  const { setDate, setView } = useCalendar()

  return (
    <div className='flex h-[50px] items-center justify-between border-b border-[rgba(0,0,0,0.0803)] px-4 py-3.5'>
      <button
        className='cursor-default text-sm leading-5 hover:text-black/75'
        onClick={() => {
          setDate(dayjs())
          setView('month')
        }}
        type='button'
      >
        {dayjs().format('dddd, MMMM D')}
      </button>
      <Button
        className='flex h-6 w-6 cursor-default items-center justify-center'
        onClick={() => setCalendarExpanded(!calendarExpanded)}
      >
        {calendarExpanded && <ChevronDownIcon width={8} height={8} />}
        {!calendarExpanded && <ChevronUpIcon width={8} height={8} />}
      </Button>
    </div>
  )
}

export default Header
