import React from 'react'

import { useWidgets } from '@/hooks'

import App from './app'

const Widgets = () => {
  const { open, setOpen } = useWidgets()

  return (
    <App
      name='Widgets'
      id='widgets'
      onClick={() => setOpen(!open)}
      tooltip='Widgets'
      data-id='widgets'
    />
  )
}

export default Widgets
