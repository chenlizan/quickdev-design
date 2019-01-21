import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import * as styles from '../../../stylesheets/Design.less';

export default class DesignContentForMobile extends React.PureComponent<any, any> {
    private readonly iframeElement: React.RefObject<any>;

    constructor(props: Readonly<any>) {
        super(props);
        this.iframeElement = React.createRef();
    }

    render(): React.ReactNode {
        const {modeSize} = this.props;
        if (this.iframeElement.current) {
            this.iframeElement.current.contentWindow.location.reload(true);
        }
        return (
            <div>
                <Scrollbars autoHide className={styles.design_content_mobile} style={modeSize}>
                    <iframe ref={this.iframeElement} src="#/preview"/>
                </Scrollbars>
            </div>
        );
    }
}