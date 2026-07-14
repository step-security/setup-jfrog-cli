
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
      '^.+\\.ts$': 'ts-jest',
      '^.+\\.js$': ['ts-jest', { diagnostics: false, tsconfig: { allowJs: true } }],
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.ts$',
  verbose: true,
  // @actions/github v8 ships @octokit/core v7+ as ESM-only. The lookbehind prevents
  // matching the outer node_modules/ when the path leads into @actions/github's nested
  // node_modules; the lookahead prevents matching its first node_modules/ occurrence.
  transformIgnorePatterns: [
      '(?<!@actions/github/)node_modules/(?!@actions/github/node_modules/)',
  ],
};