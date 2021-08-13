module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
  env: {
    production: {
      ignore: [
        '**/*.test.tsx',
        '**/*.test.ts',
        '**/*.test.js',
        '**/*.stories.tsx',
        '**/*.stories.ts',
        '**/*.stories.js',
        '__snapshots__',
      ],
    },
  },
  ignore: ['node_modules'],
}
