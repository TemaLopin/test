import webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/types'
import { buildDevServer } from './buildDevServer'

export const buildWebpack = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths } = options

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(options),
    devServer: buildDevServer(options),
  }
}
