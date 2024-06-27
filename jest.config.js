// module.exports = {
//   preset: 'ts-jest', // or 'js-jest' if you're using JavaScript
//   transform: {
//     '^.+\\.(ts|js)?$': 'ts-jest', // or 'js-jest' if you're using JavaScript
//   },
//   moduleFileExtensions: ['ts', 'js', 'json'],
//   moduleNameMapper: {
//     '^lib/(.*)$': '<rootDir>/lib/$1',
//   },
// };
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node"
};