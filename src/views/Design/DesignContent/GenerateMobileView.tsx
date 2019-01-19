import * as React from "react";
import GenerateView from '../../../components/GenerateView';

declare var Babel: any;

const stripBom = require('strip-bom');

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

const BabelGenerateView = Babel.transform(stripBom(GenerateView.toString()), babelConfig).code;

export default class DesignContentForMobile extends React.PureComponent<any, any> {

    render(): React.ReactNode {
        const {uiCode, uiMeta} = this.props;
        return React.createElement(eval(Babel.transform(stripBom(BabelGenerateView + uiCode), babelConfig).code), {uiMeta: uiMeta});
    }
}