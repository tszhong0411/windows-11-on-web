import { type KnipConfig } from 'knip'

const config: KnipConfig = {
  entry: ['./src/ui/index.ts'],
  commitlint: {
    config: 'commitlint.config.mjs'
  },
  ignoreBinaries: ['only-allow', 'sharp'],
  ignoreDependencies: ['prettier-plugin-*'],
  postcss: {
    config: 'postcss.config.mjs'
  }
}

export default config
