import * as React from 'react';
import {Checkbox, Menu, Dropdown, Icon} from 'antd';
import {CheckboxChangeEvent} from "antd/lib/checkbox";
import {ClickParam} from "antd/lib/menu";
import DesignContentForCodeEdit from './DesignContentForCodeEdit';
import DesignContentForMobile from './DesignContentForMobile';
import * as styles from "../../../stylesheets/Design.less";

export default class Index extends React.Component<any, any> {

    displayName: "DesignContent" | undefined;
    private thisNode: any;

    constructor(props: any) {
        super(props);
        this.state = {
            modeName: 'iPhone 5/SE',
            modeSize: {width: 320, height: 568},
            codeView: false,
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

        if ((e.target as any)["date-type"] === 'javascript') {
            this.setState({codeView: e.target.checked, jsonView: false})
        }
        if ((e.target as any)["date-type"] === 'json') {
            this.setState({jsonView: e.target.checked, codeView: false})
        }
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
        const {uiCode, uiMeta} = this.props;
        const {codeView, jsonView, modeName, modeSize} = this.state;
        let codeEditHeight = 0;
        if ((codeView || jsonView) && this.thisNode && this.thisNode.ownerDocument) {
            const content = this.thisNode.ownerDocument.querySelector('.ant-layout-content');
            content.style.overflow = 'hidden';
            codeEditHeight = content.clientHeight - 50;
        } else if (this.thisNode && this.thisNode.ownerDocument) {
            const content = this.thisNode.ownerDocument.querySelector('.ant-layout-content');
            content.style.overflow = '';
        }
        return (
            <div ref={(node: any) => (this as any).thisNode = node}>
                <Dropdown className={styles.design_content_mode} overlay={this.menu} trigger={['click']}>
                    <a>{modeName}<Icon type="down"/></a>
                </Dropdown>
                <Checkbox date-type="javascript" className={styles.design_content_view_javascript} checked={codeView}
                          onChange={this.onChangeForCheckBox}>javascript</Checkbox>
                <a/>
                <Checkbox date-type="json" className={styles.design_content_view_json} checked={jsonView}
                          onChange={this.onChangeForCheckBox}>json</Checkbox>
                {(codeView || jsonView) ?
                    <DesignContentForCodeEdit style={{height: codeEditHeight}} codeView={codeView} jsonView={jsonView} uiCode={uiCode} uiMeta={uiMeta}/> :
                    <DesignContentForMobile modeSize={modeSize} uiCode={uiCode} uiMeta={uiMeta}/>
                }
            </div>
        )
    }

}