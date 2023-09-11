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
  const result: number[] = Array.from({ length: size })

  for (let i = 0; i < size; i++) {
    // TODO: Fix this
    // eslint-disable-next-line security/detect-object-injection
    result[i] = start + i * step
  }

  return result
}
