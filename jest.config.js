// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts?$': 'ts-jest', // Transpile TypeScript files using ts-jest
    },
    moduleFileExtensions: ['ts', 'js'], // Recognize TypeScript and JavaScript files
    coveragePathIgnorePatterns: [
            "/node_modules/"
          ]
  };
  
