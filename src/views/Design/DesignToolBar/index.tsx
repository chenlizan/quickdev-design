import * as React from "react";
import { Avatar, Button, message, Radio, Switch } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { RadioChangeEvent } from "antd/lib/radio";
import { SwitchChangeEventHandler } from "antd/lib/switch";
import Open, { OpenProps } from "./Open";
import * as styles from "../../../stylesheets/Design.less";

const { initState } = require("../../../reducers");

export default class Index extends React.PureComponent<any, any> {
  displayName: "DesignToolBar" | undefined;

  componentWillMount(): void {
    this.props.handleResetState(initState.Design);
  }

  handleOnChange = (e: RadioChangeEvent) => {
    this.props.handleCurrentView(e.target.value);
  };

  handleSwitchOnChange: SwitchChangeEventHandler = (checked, event) => {
    this.props.handleBoostMode(checked);
  };

  render(): React.ReactNode {
    const { boostMode, currentView } = this.props;
    return (
      <div className={styles.design_header_toolbar}>
        <Radio.Group
          className={styles.design_header_toolbar_mode}
          value={currentView}
          buttonStyle="solid"
          onChange={this.handleOnChange}
        >
          <Radio.Button value="view">View</Radio.Button>
          <Radio.Button value="json">Json</Radio.Button>
          {boostMode ? <Radio.Button value="code">Code</Radio.Button> : null}
        </Radio.Group>
        <div className={styles.design_header_toolbar_right}>
          <Switch
            defaultChecked={boostMode}
            size="small"
            onChange={this.handleSwitchOnChange}
          />
          <Open
            onChange={(value): OpenProps => this.props.handleOpenFile(value)}
          />
          <Button onClick={() => message.success("Save to clipboard")}>
            Save
          </Button>
          <Avatar shape="square" size="small" icon={<UserOutlined />} />
        </div>
      </div>
    );
  }
}
