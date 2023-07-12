export const getVolumeLevel = (volume: number): number => {
  if (volume === 0) return 0
  if (volume > 0 && volume < 34) return 1
  if (volume > 33 && volume < 67) return 2
  if (volume > 66) return 3
  throw new Error('Invalid volume level')
}
