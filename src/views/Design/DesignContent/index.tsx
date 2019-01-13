import * as React from 'react';
import * as ReactDOM from "react-dom";
import {Checkbox, Menu, Dropdown, Icon} from 'antd';
import {CheckboxChangeEvent} from "antd/lib/checkbox";
import {ClickParam} from "antd/lib/menu";
import DesignContentForCodeEdit from './DesignContentForCodeEdit';
import DesignContentForMobile from './DesignContentForMobile';
import * as styles from "../../../stylesheets/Design.less";

export default class Index extends React.Component<any, any> {

    displayName: "DesignContent" | undefined;

    constructor(props: any) {
        super(props);
        this.state = {
            modeName: 'iPhone 5/SE',
            modeSize: {width: 320, height: 568},
            jsonView: false
        };
    }

    private onClickForMenu = (e: ClickParam) => {
        (this as any).setState({
            modeName: e.item.props.children.props.children,
            modeSize: e.item.props.children.props['data-size']
        });
    };

    private onChangeForCheckBox = (e: CheckboxChangeEvent) => {
        this.setState({jsonView: e.target.checked})
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
        const {jsonView, modeName, modeSize} = this.state;
        const thisNode = ReactDOM.findDOMNode(this);
        let codeEditHeight = 0;
        if (jsonView && thisNode && thisNode.ownerDocument) {
            const content = (thisNode as any).ownerDocument.querySelector('.ant-layout-content');
            content.style.overflow = 'hidden';
            codeEditHeight = content.clientHeight - 50;
        } else if (thisNode && thisNode.ownerDocument) {
            const content = (thisNode as any).ownerDocument.querySelector('.ant-layout-content');
            content.style.overflow = '';
        }
        return (
            <div>
                <Dropdown className={styles.design_content_mode} overlay={this.menu} trigger={['click']}>
                    <a>{modeName}<Icon type="down"/></a>
                </Dropdown>
                <Checkbox onChange={this.onChangeForCheckBox}
                          className={styles.design_content_view}>JSON</Checkbox>
                {jsonView ?
                    <DesignContentForCodeEdit style={{height: codeEditHeight}} uiMeta={uiMeta}/> :
                    <DesignContentForMobile modeSize={modeSize} uiMeta={uiMeta}/>
                }
            </div>
        )
    }

}