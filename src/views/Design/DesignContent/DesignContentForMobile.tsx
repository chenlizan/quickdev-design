import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import * as styles from '../../../stylesheets/Design.less';
import GenerateMobileView from './GenerateMobileView';

export default class DesignContentForMobile extends React.PureComponent<any, any> {

    render(): React.ReactNode {
        const {modeSize, uiCode, uiMeta} = this.props;
        return (
            <div>
                <Scrollbars autoHide className={styles.design_content_mobile} style={modeSize}>
                    <GenerateMobileView uiCode={uiCode} uiMeta={uiMeta}/>
                </Scrollbars>
            </div>
        );
    }
}