export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: [
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/test.ts',
        '**/test.tsx',
        ],
  };
  