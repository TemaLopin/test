import { ModuleOptions } from 'webpack'

export const buildLoaders = (): ModuleOptions['rules'] => {
  const tsLoader = {
    test: /\.(ts|tsx)$/, // Регулярное выражение для файлов TypeScript
    use: 'ts-loader', // Загрузчик для компиляции TypeScript
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.css$/, // Регулярное выражение для файлов CSS
    use: ['style-loader', 'css-loader'], // Загрузчики для обработки CSS
  }

  return [cssLoader, tsLoader]
}
