import * as React from "react";
import Input from "antd/lib/input";
import * as styles from "./assets/index.less";

export default class Index extends React.PureComponent<any, any> {
  displayName: "Input" | undefined;

  handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange({
      target: { value: e.target.value === "" ? undefined : e.target.value },
    });
  };

  render(): React.ReactNode {
    return (
      <Input
        className={styles["attribute_field_input"]}
        onChange={this.handleOnChange}
        value={this.props.value}
      />
    );
  }
}
