import { motion } from 'framer-motion'

import { useCalendar } from '@/hooks'

import Days from './days'
import Weekdays from './weekdays'
import { variants } from '../calendar'

const MonthView = () => {
  const { drill } = useCalendar()

  return (
    <motion.div
      variants={variants}
      initial={`${drill}Initial`}
      animate='animate'
      exit={`${drill}Exit`}
      className='px-[3px] pb-0.5'
    >
      <Weekdays />
      <Days />
    </motion.div>
  )
}

export default MonthView
