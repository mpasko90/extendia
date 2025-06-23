module.exports = {
  preset: 'jest-puppeteer',
  testMatch: ['**/__tests__/**/*.a11y.[jt]s?(x)'],
  setupFilesAfterEnv: ['./jest-a11y-setup.js']
};
