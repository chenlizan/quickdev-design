import * as React from 'react';
import {Tabs} from 'antd';
import Component, {ClickEventHandler} from './Component';

const TabPane = Tabs.TabPane;

export default class Index extends React.PureComponent<any, any> {
    displayName: "DesignRight" | undefined;

    handleClick: ClickEventHandler = (e, data) => {
        console.log(data);
    };

    render(): React.ReactNode {
        const {uiMeta} = this.props;
        return (
            <Tabs {...this.props} defaultActiveKey="1" tabPosition="bottom">
                <TabPane tab="部件" key="1">
                    <Component onClick={this.handleClick}/>
                </TabPane>
                <TabPane tab="属性" key="2">Content of Tab Pane 2</TabPane>
            </Tabs>
        )
    }
}