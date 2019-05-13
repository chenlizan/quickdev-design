import * as React from 'react';
import {Tabs} from 'antd';
// import Attribute from '../../../containers/Design/DesignRightAttribute';
import Attribute from './Attribute';
import Component, {ClickEventHandler} from './Component';
import * as styles from '../../../stylesheets/Design.less';

const TabPane = Tabs.TabPane;

export default class Index extends React.PureComponent<any, any> {

    displayName: "DesignRight" | undefined;

    handleChange = (data: any) => {
        this.props.handleAttributeChange(data);
    };

    handleClick: ClickEventHandler = (e, data) => {
        this.props.handleChooseComponent(data);
    };

    render(): React.ReactNode {
        const {currentProps} = this.props;
        return (
            <Tabs className={styles.design_right} defaultActiveKey="1" tabPosition="bottom">
                <TabPane tab="部件" key="1">
                    <Component currentProps={currentProps} onClick={this.handleClick}/>
                </TabPane>
                <TabPane tab="属性" key="2">
                    <Attribute currentProps={currentProps} onChange={this.handleChange} onClick={this.handleClick}/>
                </TabPane>
                <TabPane tab="样式" key="3">
                </TabPane>
            </Tabs>
        )
    }
}