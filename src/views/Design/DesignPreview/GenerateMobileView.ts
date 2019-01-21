declare var Babel: any;

const React = require('react');
const stripBom = require('strip-bom');
const GenerateView = require('../../../components/GenerateView');

const babelConfig = {
    ast: false,
    babelrc: false,
    presets: [
        "es2015",
        "react",
        "stage-0"
    ],
    sourceMap: false,
    sourceType: "module"
};

const BabelGenerateView = Babel.transform(stripBom(GenerateView.default.toString()), babelConfig).code;

export const BabelCompile = (uiCode: string) => {
    let reactObj = null;
    try {
        reactObj = eval(Babel.transform(stripBom(BabelGenerateView + uiCode), babelConfig).code);
    } catch (err) {
        console.log(err);
    }
    return reactObj;
};