module.exports = {
  automock: false,
  bail: true,
  verbose: false,
  collectCoverage: true,
  setupTestFrameworkScriptFile: './__tests__/__setup_framework.js',
  globalSetup: './__tests__/__global_setup.js',
  globalTeardown: './__tests__/__global_teardown.js',
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
  coverageDirectory: './coverage/',
  collectCoverageFrom: ['src/**/*.js'],
  testMatch: ['**/__tests__/?(*.)+(spec|test).js?(x)'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    pretendToBeVisual: true
  }
};
