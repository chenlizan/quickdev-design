import * as React from "react";
import { Tabs } from "antd";
import Attribute from "./Attribute";
import Component from "./Component";
import BoxModel from "../../../components/StyleField/common/BoxModel";
import { ClickEventHandler } from "./PropsType";
import * as styles from "../../../stylesheets/Design.less";

const TabPane = Tabs.TabPane;

export default class Index extends React.PureComponent<any, any> {
  displayName: "DesignRight" | undefined;

  state = {
    value: {},
  };

  handleChange = (data: any) => {
    this.props.handleAttributeChange(data);
  };

  handleChange1 = (data: any) => {
    this.setState({ value: data });
  };

  handleClick: ClickEventHandler = (e, data) => {
    this.props.handleChooseComponent(data);
  };

  render(): React.ReactNode {
    const { currentProps } = this.props;
    const { value } = this.state;
    return (
      <Tabs className={styles.design_right} centered defaultActiveKey="1" tabPosition="bottom">
        <TabPane tab="部件" key="1">
          <Component currentProps={currentProps} onClick={this.handleClick} />
        </TabPane>
        <TabPane tab="属性" key="2">
          <Attribute currentProps={currentProps} onChange={this.handleChange} onClick={this.handleClick} />
        </TabPane>
        <TabPane tab="样式" key="3">
          <BoxModel name="color" value={value} onChange={this.handleChange1} keys={["top", "right", "bottom", "left", "center"]} disabled={false} />
        </TabPane>
      </Tabs>
    );
  }
}
