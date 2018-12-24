import * as React from 'react';
import GenerateView from '../../components/GenerateView';
import * as styles from '../../stylesheets/Design.less';


export default class DesignContentForMobile extends React.PureComponent<any, any> {
    render(): React.ReactNode {
        const {uiMeta} = this.props;
        return (
            <div className={styles.design_content_mobile}>
                <GenerateView uiMeta={uiMeta}/>
            </div>
        );
    }
}