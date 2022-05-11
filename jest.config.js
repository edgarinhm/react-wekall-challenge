module.exports = {
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}',
        '!<rootDir>/src/**',
        '!<rootDir>/src/**/index.ts',
        '!**/*.d.ts',
    ],
    coverageDirectory: 'coverage',
    coverageProvider: 'babel',
    moduleNameMapper: {
        '@/tests/(.+)': '<rootDir>/tests/$1',
        '@/(.+)': '<rootDir>/src/$1',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/src/config/fileMock.js',
        '\\.(css|less)$': 'identity-obj-proxy',
    },
    testMatch: ['**/*.spec.ts'],
    roots: [
        '<rootDir>/src',
        '<rootDir>/tests'
    ],
    transform: {
        '\\.ts$': 'ts-jest'
    },
    clearMocks: true,
    setupFiles: ['dotenv/config']
}