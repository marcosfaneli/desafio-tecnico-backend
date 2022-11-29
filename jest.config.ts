export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  preset: 'ts-jest',
  coverageThreshold: {
    global: {
      functions: 100,
      lines: 100,
    },
  },
};
