module.exports = {
  preset: 'jest-puppeteer',
  automock: false,
  bail: false,
  verbose: true,
  collectCoverage: true,
  globalSetup: './__tests__/__setup.js',
  globalTeardown: './__tests__/__teardown.js',
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
  coverageDirectory: './coverage/',
  collectCoverageFrom: ['src/**/*.js'],
  testMatch: [
    // "**/__tests__/**/*.js?(x)",
    '**/?(*.)+(spec|test).js?(x)'
  ]
};
