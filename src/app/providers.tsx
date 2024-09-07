'use client'

import { TooltipProvider } from '@/ui/tooltip'

type ProvidersProps = {
  children: React.ReactNode
}

const Providers = (props: ProvidersProps) => {
  const { children } = props

  return <TooltipProvider skipDelayDuration={0}>{children}</TooltipProvider>
}

export default Providers
