import * as React from "react";
import { Button, Carousel, Input } from "antd/lib";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import * as styles from "../../stylesheets/Account.less";

export default class Design extends React.PureComponent<any, any> {
  render(): React.ReactNode {
    return (
      <div>
        <div className={styles.account_form}>
          <div className={styles.account_form_login}>
            <div className={styles.account_form_login_check} />
            <div className={styles.account_form_login_input}>
              <Input placeholder="Username" size="large" prefix={<UserOutlined />} />
              <Input placeholder="Password" size="large" prefix={<LockOutlined />} />
              <Button className={styles.account_form_login_submit}>Sign in</Button>
            </div>
          </div>
        </div>
        <Carousel autoplay dots={false}>
          <img src={"//pic1.win4000.com/wallpaper/c/59bcd511cb990.jpg"} />
          <img src={"//pic1.win4000.com/wallpaper/c/59bcd50fdded7.jpg"} />
          <img src={"//pic1.win4000.com/wallpaper/c/59bcd5132c49d.jpg"} />
        </Carousel>
      </div>
    );
  }
}
