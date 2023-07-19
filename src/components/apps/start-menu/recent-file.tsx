import Image from 'next/image'

export type RecentFileProps = {
  name: string
  description: string
  icon: string
}

const RecentFile = (props: RecentFileProps) => {
  const { name, description, icon } = props

  return (
    <div className='flex h-14 w-[268px] items-center gap-3 rounded-[3px] p-3 transition-colors duration-150 hover:bg-white/70'>
      <div>
        <Image
          src={icon}
          width={32}
          height={32}
          draggable={false}
          alt={name}
          quality={100}
        />
      </div>
      <div className='flex flex-col gap-px text-xs'>
        <div>{name}</div>
        <div className='text-secondary'>{description}</div>
      </div>
    </div>
  )
}

export default RecentFile
