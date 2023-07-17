import React from 'react'

import { useClickOutside, useWidgets } from '@/hooks'

import App from './app'

const Widgets = () => {
  const { open, setOpen } = useWidgets()
  const [ref, setRef] = React.useState<HTMLButtonElement | null>(null)

  useClickOutside(() => setOpen(false), [ref])

  return (
    <App
      name='Widgets'
      id='widgets'
      onClick={() => setOpen(!open)}
      ref={setRef}
    />
  )
}

export default Widgets
