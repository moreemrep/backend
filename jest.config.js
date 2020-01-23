module.exports = {
  setupFiles: ['./tests/config/jest.env.ts'],
  setupFilesAfterEnv: ['./tests/config/jest.setup.ts', './tests/config/jest.global.ts'],
  verbose: true,
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'node',
  coverageDirectory: './coverage/',
  collectCoverage: true,
  coverageReporters: ['lcov'],
  collectCoverageFrom: [
    'src/**/*.ts'
  ],
  preset: 'ts-jest',
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1'
  }
}
