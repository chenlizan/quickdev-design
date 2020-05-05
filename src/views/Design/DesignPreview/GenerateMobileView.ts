const Babel = require('@babel/standalone');
const React = require('react');
const stripBom = require('strip-bom');
const GenerateView = process.env.NODE_ENV === 'production' ? require('quickdev-lib/lib/GenerateView').default : require('../../../components/GenerateView').default;


const babelConfig = {
    ast: false,
    babelrc: false,
    presets: ['env', 'react'],
    plugins: [
        ['proposal-class-properties']
    ],
    sourceMap: false,
    sourceType: "script"
};

const BabelCompile = (uiCode: string) => {
    let reactObj = null;
    try {
        reactObj = eval(Babel.transform(stripBom(uiCode), babelConfig).code);
    } catch (err) {
        console.log(err);
    }
    return reactObj;
};

export default BabelCompile;