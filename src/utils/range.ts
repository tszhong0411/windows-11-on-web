export const range = (start: number, end?: number, step = 1) => {
  if (end === undefined) {
    end = start
    start = 0
  }

  if (step === 0) {
    throw new Error('Step cannot be zero')
  }

  if (end < start && step > 0) {
    step = -step
  }

  const size = Math.max(Math.ceil((end - start) / step), 0)
  const result: number[] = new Array(size)

  for (let i = 0; i < size; i++) {
    result[i] = start + i * step
  }

  return result
}
