import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        default: 'var(--font-segoe-ui)'
      },
      backgroundImage: {
        gradient: 'linear-gradient(180deg, rgba(0,0,0,0.08) 90%, rgba(0,0,0,0.2) 100%)'
      },
      boxShadow: {
        shell: '0px 32px 64px 0 rgba(0, 0, 0, 0.1876), 0px 2px 21px 0 rgba(0, 0, 0, 0.1474)',
        flyout: '0px 8px 16px 0 rgba(0, 0, 0, 0.14)'
      },
      borderColor: {
        shell: 'rgba(117, 117, 117, 0.4)',
        divider: 'rgba(0, 0, 0, 0.0803)'
      }
    }
  },
  plugins: []
}

export default config
