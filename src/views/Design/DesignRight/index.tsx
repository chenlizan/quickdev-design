import * as React from 'react';
import {Tabs} from 'antd';
import Attribute from '../../../containers/Design/DesignRightAttribute';
import Component, {ClickEventHandler} from './Component';

const TabPane = Tabs.TabPane;

export default class Index extends React.PureComponent<any, any> {

    displayName: "DesignRight" | undefined;

    handleClick: ClickEventHandler = (e, data) => {
        this.props.handleChooseComponent(data);
    };

    render(): React.ReactNode {
        const {currentNode, uiMeta} = this.props;
        return (
            <Tabs {...this.props} defaultActiveKey="1" tabPosition="bottom">
                <TabPane tab="部件" key="1">
                    <Component onClick={this.handleClick}/>
                </TabPane>
                <TabPane tab="属性" key="2">
                    <Attribute/>
                </TabPane>
            </Tabs>
        )
    }
}