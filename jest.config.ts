
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  silent: false,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>src/$1',
  },
  coverageThreshold: {
    './src/controllers/': {
      functions: 80,
    },
  },
};
