import Image from 'next/image'

const Search = () => {
  return (
    <div className='relative mx-8 mt-8'>
      <div className='flex h-8 w-full items-center rounded-full border border-[rgba(0,0,0,0.0578)] bg-white pl-[42px]'>
        <input
          placeholder='Search for apps, settings, and documents'
          className='w-full text-sm focus:outline-none'
        />
      </div>
      <Image
        src='/static/images/apps/search/icon.png'
        className='absolute left-[15px] top-1/2 -translate-y-1/2'
        width={14.5}
        height={14.5}
        quality={100}
        draggable={false}
        alt='Search'
      />
    </div>
  )
}

export default Search
