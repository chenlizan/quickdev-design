import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import {Menu, Dropdown, Icon} from 'antd';
import GenerateView from '../../components/GenerateView';
import * as styles from '../../stylesheets/Design.less';

export default class DesignContentForMobile extends React.PureComponent<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            modeName: 'iPhone 5/SE',
            modeSize: {width: 320, height: 568}
        };
    }

    onClickForMenu = (e: any) => {
        (this as any).setState({
            modeName: e.item.props.children.props.children,
            modeSize: e.item.props.children.props['data-size']
        });
    };

    menu = (
        <Menu onClick={this.onClickForMenu}>
            <Menu.Item>
                <a data-size={{width: 320, height: 568}}>iPhone 5/SE</a>
            </Menu.Item>
            <Menu.Item>
                <a data-size={{width: 375, height: 667}}>iPhone 6/7/8</a>
            </Menu.Item>
            <Menu.Item>
                <a data-size={{width: 414, height: 736}}>iPhone 6/7/8 Plus</a>
            </Menu.Item>
        </Menu>
    );

    render(): React.ReactNode {
        const {uiMeta} = this.props;
        const {modeName, modeSize} = this.state;
        return (
            <div>
                <Dropdown overlay={this.menu} trigger={['click']}><a
                    style={{display: 'inline-block', margin: 5}}>{modeName}<Icon type="down"/></a></Dropdown>
                <Scrollbars autoHide className={styles.design_content_mobile} style={modeSize}>
                    <GenerateView uiMeta={uiMeta}/>
                </Scrollbars>
            </div>
        );
    }
}