module.exports = {
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  silent: false,
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  collectCoverageFrom: ['packages/**/*.js', '!packages/**/index.js', '!**/*.stories.js'],
}
