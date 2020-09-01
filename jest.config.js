module.exports = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/src/setup-jest.ts'
  ],
  moduleNameMapper: {
    '^lodash-es$': 'lodash'
  },
  testMatch: [
    '<rootDir>/src/**/*.spec.ts',
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '!**/node_modules/**',
    '!**/src/**/*.module.ts',
    '!test/**',
    '!**/polyfills.ts',
    '!**/environments/**',
    '!**/src/setup-jest.ts'
  ]
};

