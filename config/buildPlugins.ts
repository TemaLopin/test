import webpack, { Configuration, DefinePlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from './types/types'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'

export const buildPlugins = ({ mode, paths, analyzer }: BuildOptions): Configuration['plugins'] => {
  const isDev = mode === 'development'

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify(process.env.API_URL),
    }),
    new ESLintPlugin(),
  ]

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin())
    /** Выносит проверку типов в отдельный процесс: не нагружая сборку */
    plugins.push(new ForkTsCheckerWebpackPlugin())
    plugins.push(new ReactRefreshWebpackPlugin())
  }

  return plugins
}
