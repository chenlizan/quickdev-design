import * as React from 'react';
import GenerateMobileView from './GenerateMobileView'

export default class DesignPreview extends React.PureComponent<any, any> {

    render(): React.ReactNode {
        const {uiCode, uiMeta} = this.props;
        return React.createElement(GenerateMobileView(uiCode), {uiMeta: uiMeta});
    }
}