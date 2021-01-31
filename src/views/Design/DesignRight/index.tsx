import * as React from "react";
import { Collapse, Tabs } from "antd";
import Attribute from "./Attribute";
import Component from "./Component";
import BoxModel from "../../../components/StyleField/common/BoxModel";
import Layout from "../../../components/StyleField/Layout";
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
    console.log(data);
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
          {/*<BoxModel name="style" value={value} onChange={this.handleChange1} keys={["top", "right", "bottom", "left", "center"]} disabled={false} />*/}
          <div className="chenlizan">
            <Collapse>
              <Layout
                value={{
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "flex-start",
                }}
                locale={{
                  header: "布局",
                  name: "当前布局 - display",
                  displaySelect: {
                    block: "block 块元素，元素前后会有换行符",
                    flex: "flex 布局，水平或垂直布置子元素",
                    "inline-block": "inline-block 行内块元素，单行多元素",
                    inline: "inline 内联元素，元素前后没换行符",
                    none: "none 隐藏元素",
                  },
                  flexName: {
                    alignItems: {
                      name: "竖向",
                      icon: "column-height",
                    },
                    justifyContent: {
                      name: "横向",
                      icon: "column-width",
                    },
                  },
                  flexSelect: {
                    alignItems: {
                      stretch: "元素被拉伸以适应容器",
                      "flex-start": "素位于容器的开头",
                      center: "元素位于容器的中心",
                      "flex-end": "元素位于容器的结尾",
                      baseline: "元素位于容器的基线上",
                    },
                    justifyContent: {
                      "flex-start": "项目位于容器的开头",
                      center: "项目位于容器的中心",
                      "flex-end": "项目位于容器的结尾",
                      "space-between": "项目位于各行之间留有空白的容器内",
                      "space-around": "项目位于各行之前、之间、之后都留有空白的容器内",
                    },
                  },
                }}
              />
            </Collapse>
          </div>
        </TabPane>
      </Tabs>
    );
  }
}
