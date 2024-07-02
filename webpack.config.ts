import path from 'path'
import webpack from 'webpack'
import dotenv from 'dotenv'
import { BuildMode, BuildPaths } from 'config/types/types'
import { buildWebpack } from './config/buildWebpack'

type EnvVariables = {
  mode?: BuildMode
  analyzer?: boolean
  port?: number
  file?: string
}

const webpackConfig = (env: EnvVariables) => {
  console.log('!@#$ env', env)
  dotenv.config({ path: env.file })

  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

  const config: webpack.Configuration = buildWebpack({
    port: (process.env.PORT && +process.env.PORT) || 3001,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer,
  })

  return config
}

export default webpackConfig
