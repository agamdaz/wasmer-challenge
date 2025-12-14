import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.jest.json' }],
  },
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.ts'],
  moduleNameMapper: {
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@lib/(.*)': '<rootDir>/src/lib/$1',
    '^@styles/(.*)': '<rootDir>/src/styles/$1',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
};

export default config;
