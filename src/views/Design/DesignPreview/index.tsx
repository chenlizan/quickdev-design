import * as React from 'react';

export default class DesignPreview extends React.PureComponent<any, any> {

    render(): React.ReactNode {
        const {uiCode, uiMeta} = this.props;
        const GenerateView = require('./GenerateMobileView')(uiCode);
        return React.createElement(GenerateView, {uiMeta: uiMeta});
    }
}