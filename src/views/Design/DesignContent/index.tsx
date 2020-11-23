import * as React from "react";
import { Menu, Dropdown } from "antd";
// import {ClickParam} from "antd/lib/menu";
import { DownOutlined } from "@ant-design/icons";
import DesignContentForCodeEdit from "./DesignContentForCodeEdit";
import DesignContentForMobile from "./DesignContentForMobile";
import * as styles from "../../../stylesheets/Design.less";

export default class Index extends React.Component<any, any> {
  displayName: "DesignContent" | undefined;
  private thisNode: any;

  constructor(props: any) {
    super(props);
    this.state = {
      modeName: "iPhone 5/SE",
      modeSize: { width: 320, height: 568 },
    };
  }

  private onClickForMenu = (e: any) => {
    (this as any).setState({
      modeName: e.item.props.children.props.children,
      modeSize: e.item.props.children.props["data-size"],
    });
  };

  private onChangeForCodeEdit = (e: string) => {
    this.props.handleCodeChange(e);
  };

  private menu = (
    <Menu onClick={this.onClickForMenu}>
      <Menu.Item>
        <a data-size={{ width: 320, height: 568 }}>iPhone 5/SE</a>
      </Menu.Item>
      <Menu.Item>
        <a data-size={{ width: 375, height: 667 }}>iPhone 6/7/8</a>
      </Menu.Item>
      <Menu.Item>
        <a data-size={{ width: 414, height: 736 }}>iPhone 6/7/8 Plus</a>
      </Menu.Item>
    </Menu>
  );

  render(): React.ReactNode {
    const { boostMode, currentProps, currentView, uiCode, uiMeta } = this.props;
    const { modeName, modeSize } = this.state;
    let codeEditHeight = 0;
    if (
      (currentView === "code" || currentView === "json") &&
      this.thisNode &&
      this.thisNode.ownerDocument
    ) {
      const content = this.thisNode.ownerDocument.querySelector(
        ".ant-layout-content"
      );
      content.style.overflow = "hidden";
      codeEditHeight = content.clientHeight;
    } else if (this.thisNode && this.thisNode.ownerDocument) {
      const content = this.thisNode.ownerDocument.querySelector(
        ".ant-layout-content"
      );
      content.style.overflow = "";
    }
    return (
      <div ref={(node: any) => ((this as any).thisNode = node)}>
        {currentView === "code" || currentView === "json" ? (
          <DesignContentForCodeEdit
            onChange={this.onChangeForCodeEdit}
            style={{ height: codeEditHeight }}
            currentView={currentView}
            uiCode={uiCode}
            uiMeta={currentProps}
          />
        ) : (
          [
            <Dropdown
              key="0"
              className={styles.design_content_mode}
              overlay={this.menu}
              trigger={["click"]}
            >
              <a>
                {modeName}
                <DownOutlined />
              </a>
            </Dropdown>,
            <DesignContentForMobile
              key="1"
              boostMode={boostMode}
              modeSize={modeSize}
              uiCode={uiCode}
              uiMeta={uiMeta}
            />,
          ]
        )}
      </div>
    );
  }
}
