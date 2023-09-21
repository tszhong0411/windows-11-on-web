import Image from 'next/image'

import { type App as AppProps } from '@/types'

const App = (props: AppProps) => {
  const { name, id } = props

  return (
    <div className='flex h-10 items-center gap-5 rounded px-3 transition-colors duration-150 hover:bg-white/70'>
      <div>
        <Image
          src={`/images/apps/${id}/icon.png`}
          width={24}
          height={24}
          draggable={false}
          alt={name}
          quality={100}
        />
      </div>
      <div className='text-xs'>{name}</div>
    </div>
  )
}

export default App
