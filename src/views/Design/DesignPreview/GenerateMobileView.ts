const Babel = require('@babel/standalone');
const React = require('react');
const stripBom = require('strip-bom');
const GenerateView = require('../../../components/GenerateView');

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

const BabelGenerateView = Babel.transform(stripBom(GenerateView.default.toString()), babelConfig).code;

const BabelCompile = (uiCode: string) => {
    let reactObj = null;
    try {
        reactObj = eval(Babel.transform(stripBom(BabelGenerateView + uiCode), babelConfig).code);
    } catch (err) {
        console.log(err);
    }
    return reactObj;
};

export default BabelCompile;