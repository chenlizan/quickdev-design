import * as React from 'react';

export default class DesignContentForMobile extends React.PureComponent<any, any> {

    render(): React.ReactNode {
        const {uiCode, uiMeta} = this.props;
        const GenerateView = require('./GenerateMobileView').default(uiCode);
        return React.createElement(GenerateView, {uiMeta: uiMeta});
    }
}