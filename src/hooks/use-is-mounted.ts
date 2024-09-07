import { useEffect, useState } from 'react'

export const useIsMounted = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect -- it's fine
    setMounted(true)
  }, [])

  return mounted
}
