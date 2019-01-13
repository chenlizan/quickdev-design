import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import GenerateView from '../../../components/GenerateView';
import * as styles from '../../../stylesheets/Design.less';

export default class DesignContentForMobile extends React.PureComponent<any, any> {

    render(): React.ReactNode {
        const {modeSize,uiMeta} = this.props;
        return (
            <div>
                <Scrollbars autoHide className={styles.design_content_mobile} style={modeSize}>
                    <GenerateView uiMeta={uiMeta}/>
                </Scrollbars>
            </div>
        );
    }
}