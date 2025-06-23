module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run build && npm run start',
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/services/house-extensions',
        'http://localhost:3000/portfolio',
        'http://localhost:3000/your-journey'
      ],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', {minScore: 0.90}],
        'categories:accessibility': ['error', {minScore: 0.90}],
        'categories:best-practices': ['error', {minScore: 0.90}],
        'categories:seo': ['error', {minScore: 0.90}],
        'first-contentful-paint': ['error', {maxNumericValue: 2000}],
        'largest-contentful-paint': ['error', {maxNumericValue: 2500}],
        'interactive': ['error', {maxNumericValue: 3500}],
        'cumulative-layout-shift': ['error', {maxNumericValue: 0.1}],
        'total-blocking-time': ['error', {maxNumericValue: 300}],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
