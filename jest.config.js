const {jsWithTs: tsjPreset} = require('ts-jest/presets');

module.exports = {
    globals: {
        'ts-jest': {
            babelConfig: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }
    },
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "identity-obj-proxy"
    },
    preset: 'ts-jest',
    setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],
    testEnvironment: 'node',
    transform: {
        ...tsjPreset.transform,
    }
};