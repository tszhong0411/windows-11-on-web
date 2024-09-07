import { useSettings } from '@/hooks'
import { getVolumeLevel } from '@/utils'

import { Volume0Icon, Volume1Icon, Volume2Icon, Volume3Icon } from './icons'

type VolumeIconProps = React.SVGAttributes<SVGElement>

const VolumeIcon = (props: VolumeIconProps) => {
  const { volume } = useSettings()

  switch (getVolumeLevel(volume)) {
    case 0: {
      return <Volume0Icon {...props} />
    }
    case 1: {
      return <Volume1Icon {...props} />
    }
    case 2: {
      return <Volume2Icon {...props} />
    }
    case 3: {
      return <Volume3Icon {...props} />
    }
    default: {
      return null
    }
  }
}

export default VolumeIcon
