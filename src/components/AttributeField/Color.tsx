import * as React from "react";
import Input from "antd/lib/input";
import Popover from "antd/lib/popover";
import { ColorResult, ChromePicker } from "react-color";
import * as styles from "./assets/index.less";

export default class Index extends React.PureComponent<any, any> {
  displayName: "Color" | undefined;

  state = {
    color: this.props.value,
  };

  handleOnChange = (color: ColorResult) => {
    this.props.onChange({ target: { value: color.hex } });
    this.setState({ color: color.hex });
  };

  renderContent = () => (
    <ChromePicker color={this.state.color} onChange={this.handleOnChange} />
  );

  render(): React.ReactNode {
    return (
      <Popover
        className={styles["attribute_field_color"]}
        placement="left"
        trigger="click"
        content={this.renderContent()}
      >
        <Input
          value={this.props.value}
          style={{ backgroundColor: this.state.color }}
        />
      </Popover>
    );
  }
}
