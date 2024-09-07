import dayjs from 'dayjs'

export const getMinDate = (view: 'month' | 'year' | 'decade') => {
  if (view === 'year') {
    return dayjs(`${dayjs().get('year') - 100}-1-1`).valueOf()
  }

  return dayjs(`${Math.floor(dayjs().get('year') / 10) * 10 - 90}-1-1`).valueOf()
}

export const getMaxDate = (view: 'month' | 'year' | 'decade') => {
  if (view === 'year') {
    return dayjs(`${dayjs().get('year') + 100}-12-31`).valueOf()
  }

  return dayjs(`${Math.floor(dayjs().get('year') / 10) * 10 + 99}-12-31`).valueOf()
}
