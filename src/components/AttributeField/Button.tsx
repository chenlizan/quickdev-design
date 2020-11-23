import * as React from "react";
import Button from "antd/lib/button";
import omit from "omit.js";
import * as styles from "./assets/index.less";

export default class Index extends React.PureComponent<any, any> {
  displayName: "Button" | undefined;

  handleOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const otherProps = omit(this.props, ["text", "onClick"]);
    const { onClick } = this.props;
    if (onClick) {
      onClick(e, otherProps);
    }
  };

  render(): React.ReactNode {
    const { text } = this.props;
    return (
      <div className={styles["attribute_field_button"]}>
        <Button type="primary" onClick={this.handleOnClick}>
          {text}
        </Button>
      </div>
    );
  }
}
