const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const Weekdays = () => {
  return (
    <div className='mb-1 flex gap-2'>
      {weekdays.map((day) => (
        <div key={day} className='flex size-10 items-center justify-center text-xs font-semibold'>
          {day}
        </div>
      ))}
    </div>
  )
}

export default Weekdays
