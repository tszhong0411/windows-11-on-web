import RecentFile, { RecentFileProps } from './recent-file'

const Recommended = () => {
  const recentFiles: RecentFileProps[] = [
    {
      name: 'Get Started',
      description: 'Welcome to Windows',
      icon: '/static/images/apps/get-started/icon.png',
    },
  ]

  return (
    <div className='mt-8 flex h-[238px] flex-col gap-3 px-8'>
      <div className='px-8 text-sm font-semibold'>Recommended</div>
      <div className='flex flex-wrap px-5'>
        {recentFiles.map((file) => (
          <RecentFile key={file.name} {...file} />
        ))}
      </div>
    </div>
  )
}

export default Recommended
